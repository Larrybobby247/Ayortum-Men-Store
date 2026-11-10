// POST /api/homevista/delete-request
//
// Vercel serverless function (Node 18+). Receives account/data deletion
// requests from the public /homevista/delete-account form.
//
// What it does:
//   1. Validates and sanitises the input (server-side, never trust the client).
//   2. Stores the request in Supabase (table: homevista_deletion_requests,
//      see backend/homevista/deletion_requests.sql). Uses the service-role key,
//      which only ever lives in server environment variables.
//   3. Prevents duplicates: an open request for the same email returns the
//      existing reference instead of creating another.
//   4. Emails the HomeVista admin/support team (and an acknowledgement to the
//      requester) through Resend.
//
// It FAILS CLOSED: if storage is not configured it returns 503. It never
// reports success for a request it has not actually stored.
//
// Required environment variables:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//   RESEND_API_KEY, HOMEVISTA_ADMIN_EMAIL, HOMEVISTA_FROM_EMAIL
// Optional:
//   HOMEVISTA_ALLOWED_ORIGINS  comma-separated, e.g. https://www.accurrattehommes.com

import { randomBytes } from 'node:crypto'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d][\d\s().-]{5,19}$/
const ACCOUNT_TYPES = ['Buyer', 'Seller', 'Agent']
const MAX_BODY_BYTES = 10 * 1024

// Best-effort per-instance rate limit (serverless instances do not share
// memory, so this is a speed bump; the unique index + dedupe is the real guard).
const hits = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5

function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_HITS
}

const clean = (s, max) =>
  String(s ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max)

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

function makeReference() {
  const d = new Date()
  const ymd = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}`
  return `HV-DEL-${ymd}-${randomBytes(3).toString('hex').toUpperCase()}`
}

function validate(b) {
  const errors = {}
  const data = {
    fullName: clean(b.fullName, 120),
    email: clean(b.email, 254).toLowerCase(),
    phone: clean(b.phone, 20),
    accountType: clean(b.accountType, 10),
    reason: clean(b.reason, 1000),
  }
  if (data.fullName.length < 2) errors.fullName = 'Please enter your full name.'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'Please enter a valid phone number, or leave it blank.'
  if (!ACCOUNT_TYPES.includes(data.accountType)) errors.accountType = 'Please choose your account type.'
  if (b.confirm !== true) errors.confirm = 'Please confirm that deletion is permanent.'
  return { data, errors }
}

function json(res, status, body) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  return res.status(status).json(body)
}

async function supabase(path, init = {}) {
  const base = process.env.SUPABASE_URL.replace(/\/$/, '')
  return fetch(`${base}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })
}

async function findOpenRequest(email) {
  const q = `homevista_deletion_requests?select=reference&email_normalized=eq.${encodeURIComponent(email)}&status=in.(received,verifying,processing)&limit=1`
  const r = await supabase(q)
  if (!r.ok) throw new Error(`lookup failed: ${r.status}`)
  const rows = await r.json()
  return rows[0]?.reference || null
}

async function sendEmail({ to, subject, html, text, replyTo }) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `HomeVista <${process.env.HOMEVISTA_FROM_EMAIL}>`,
      to: [to],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  })
  if (!r.ok) throw new Error(`email failed: ${r.status}`)
}

export default async function handler(req, res) {
  // Same-site only. Browsers always send Origin on cross-site POSTs.
  const origin = req.headers.origin
  if (origin) {
    const allowed = (process.env.HOMEVISTA_ALLOWED_ORIGINS || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    const sameHost = (() => {
      try {
        return new URL(origin).host === req.headers.host
      } catch {
        return false
      }
    })()
    if (!sameHost && !allowed.includes(origin)) return json(res, 403, { message: 'Forbidden.' })
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { message: 'Method not allowed.' })
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('[homevista-delete] storage not configured')
    return json(res, 503, {
      message: `The request service is temporarily unavailable. Please email ${process.env.HOMEVISTA_ADMIN_EMAIL || 'our support team'} with the subject "HomeVista account deletion".`,
    })
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim()
  if (rateLimited(ip)) return json(res, 429, { message: 'Too many requests. Please try again later.' })

  const len = Number(req.headers['content-length'] || 0)
  if (len > MAX_BODY_BYTES) return json(res, 413, { message: 'Request too large.' })

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = null
    }
  }
  if (!body || typeof body !== 'object') return json(res, 400, { message: 'Invalid request.' })

  // Honeypot: pretend success so bots learn nothing, but store nothing.
  if (clean(body.website, 200)) return json(res, 200, { reference: makeReference(), duplicate: false })

  const { data, errors } = validate(body)
  if (Object.keys(errors).length) return json(res, 400, { errors })

  try {
    const existing = await findOpenRequest(data.email)
    if (existing) return json(res, 200, { reference: existing, duplicate: true })

    const reference = makeReference()
    const insert = await supabase('homevista_deletion_requests', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({
        reference,
        full_name: data.fullName,
        email: data.email,
        email_normalized: data.email,
        phone: data.phone || null,
        account_type: data.accountType,
        reason: data.reason || null,
        status: 'received',
        user_agent: clean(req.headers['user-agent'], 300) || null,
      }),
    })

    if (insert.status === 409) {
      // Lost a race with a concurrent identical request: return the winner.
      const winner = await findOpenRequest(data.email)
      if (winner) return json(res, 200, { reference: winner, duplicate: true })
    }
    if (!insert.ok) throw new Error(`insert failed: ${insert.status}`)

    // The request is safely stored. Notifications are best-effort.
    if (process.env.RESEND_API_KEY && process.env.HOMEVISTA_ADMIN_EMAIL && process.env.HOMEVISTA_FROM_EMAIL) {
      const rows = [
        ['Reference', reference],
        ['Name', data.fullName],
        ['Email', data.email],
        ['Phone', data.phone || '(not provided)'],
        ['Account type', data.accountType],
        ['Reason', data.reason || '(not provided)'],
      ]
      const adminHtml = `<h2>New HomeVista account deletion request</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
        .join('')}</table><p>Verify ownership, review outstanding payouts, then delete eligible data and update the request status.</p>`
      const adminText = `New HomeVista account deletion request\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}`

      await Promise.allSettled([
        sendEmail({
          to: process.env.HOMEVISTA_ADMIN_EMAIL,
          subject: `[HomeVista] Account deletion request ${reference}`,
          html: adminHtml,
          text: adminText,
          replyTo: data.email,
        }).catch((e) => console.error('[homevista-delete] admin email', reference, e.message)),
        sendEmail({
          to: data.email,
          subject: `We received your HomeVista deletion request (${reference})`,
          html: `<p>Hello ${escapeHtml(data.fullName)},</p><p>We have received your request to delete your HomeVista account and associated eligible personal information.</p><p><strong>Reference:</strong> ${reference}</p><p>We may contact you to verify account ownership. We will confirm by email once the process is complete. If you did not make this request, please reply to this email.</p><p>HomeVista, by ${escapeHtml('Accurratte Hommes International')}</p>`,
          text: `Hello ${data.fullName},\n\nWe have received your request to delete your HomeVista account and associated eligible personal information.\n\nReference: ${reference}\n\nWe may contact you to verify account ownership. We will confirm by email once the process is complete. If you did not make this request, please reply to this email.\n\nHomeVista, by Accurratte Hommes International`,
        }).catch((e) => console.error('[homevista-delete] ack email', reference, e.message)),
      ])
    } else {
      console.warn('[homevista-delete] Resend not configured; request stored but nobody was notified:', reference)
    }

    return json(res, 201, { reference, duplicate: false })
  } catch (err) {
    // Never log personal data; the message carries only status codes.
    console.error('[homevista-delete] failed:', err.message)
    return json(res, 500, {
      message: 'We could not save your request right now. Please try again shortly.',
    })
  }
}
