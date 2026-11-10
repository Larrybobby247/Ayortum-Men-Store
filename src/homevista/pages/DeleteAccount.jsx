import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import HVLogo from '../components/HVLogo'
import { HV, routes } from '../config'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d][\d\s().-]{5,19}$/
const ACCOUNT_TYPES = ['Buyer', 'Seller', 'Agent']

const initial = {
  fullName: '',
  email: '',
  phone: '',
  accountType: '',
  reason: '',
  confirm: false,
  website: '', // honeypot: real users never see or fill this
}

function validate(v) {
  const e = {}
  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter the email address registered on your account.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, like name@example.com.'
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = 'Please enter a valid phone number, or leave this blank.'
  if (!ACCOUNT_TYPES.includes(v.accountType)) e.accountType = 'Please choose your account type.'
  if (v.reason.length > 1000) e.reason = 'Please keep the reason under 1,000 characters.'
  if (!v.confirm) e.confirm = 'Please confirm that you understand deletion is permanent.'
  return e
}

const fieldCls = (err) =>
  `w-full rounded-xl border bg-white px-4 py-3.5 text-[0.95rem] text-[#1c231a] transition-colors placeholder:text-[#9aa396] focus:border-[#467434] focus:outline-none focus:ring-4 focus:ring-[#467434]/15 ${
    err ? 'border-red-500' : 'border-black/15'
  }`

function Field({ id, label, required, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#1f3a17]">
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
        {optional && <span className="ml-2 text-xs font-normal text-[#5b6558]">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-[#5b6558]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function DeleteAccount() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [result, setResult] = useState(null)
  const [serverError, setServerError] = useState('')
  const [copied, setCopied] = useState(false)
  const inFlight = useRef(false) // blocks double submits even before state updates
  const formRef = useRef(null)

  const set = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const blur = (name) => () => {
    const e = validate(values)
    setErrors((p) => ({ ...p, [name]: e[name] }))
  }

  const aria = (name, hasHint) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : hasHint ? `${name}-hint` : undefined,
  })

  async function onSubmit(ev) {
    ev.preventDefault()
    if (inFlight.current || status === 'submitting' || status === 'success') return

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    inFlight.current = true
    setStatus('submitting')
    setServerError('')

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 25000)

    try {
      const res = await fetch(HV.deletionEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          accountType: values.accountType,
          reason: values.reason.trim(),
          confirm: values.confirm,
          website: values.website,
        }),
        signal: controller.signal,
      })

      let data = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (res.ok && data?.reference) {
        setResult({ reference: data.reference, duplicate: Boolean(data.duplicate) })
        setStatus('success')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (res.status === 400 && data?.errors) {
        setErrors(data.errors)
        setServerError('Please check the highlighted fields and try again.')
      } else if (res.status === 429) {
        setServerError('Too many requests. Please wait a few minutes and try again.')
      } else if (res.status === 404 || res.status === 405) {
        setServerError(
          `The request service is unavailable right now. Please email ${HV.supportEmail} with the subject "HomeVista account deletion" and we will process your request.`,
        )
      } else {
        setServerError(
          data?.message ||
            `We could not submit your request. Please try again, or email ${HV.supportEmail} with the subject "HomeVista account deletion".`,
        )
      }
      setStatus('error')
    } catch (err) {
      setServerError(
        err?.name === 'AbortError'
          ? 'The request took too long. Please check your connection and try again.'
          : `We could not reach the server. Please check your connection and try again, or email ${HV.supportEmail}.`,
      )
      setStatus('error')
    } finally {
      clearTimeout(timer)
      inFlight.current = false
    }
  }

  async function copyRef() {
    try {
      await navigator.clipboard.writeText(result.reference)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the reference is still visible on screen */
    }
  }

  const submitting = status === 'submitting'

  return (
    <>
      <Seo
        title="Request Account and Data Deletion | HomeVista by Accurratte Hommes"
        description="Request permanent deletion of your HomeVista account and associated personal data. No login required. Learn what is deleted and which records may be retained."
        path={routes.deleteAccount}
      />

      <section className="relative overflow-hidden bg-[#1f3a17] pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f58f20]/15" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-6 flex justify-center">
            <HVLogo light />
          </div>
          <h1 className="hv-display text-4xl font-bold sm:text-5xl">Request Account and Data Deletion</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            HomeVista respects your right to control your personal information.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
        {/* Form / success */}
        <div>
          <p className="mb-8 text-lg leading-relaxed text-[#3d463a]">
            If you no longer wish to use HomeVista, you can submit a request to permanently delete
            your account and associated eligible personal information. You do not need to log in.
          </p>

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-3xl border border-[#467434]/25 bg-[#e8f0e4] p-8"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#467434] text-2xl text-white">
                <i className="fas fa-check" aria-hidden="true" />
              </span>
              <h2 className="hv-display text-2xl font-bold text-[#1f3a17]">
                {result?.duplicate ? 'We already have your request' : 'Your request has been received'}
              </h2>
              <p className="mt-3 leading-relaxed text-[#3d463a]">
                {result?.duplicate
                  ? 'A deletion request for this email address is already being processed, so we have not created another one.'
                  : 'Thank you. The HomeVista team will review your request and may contact you at the email address you provided to verify account ownership.'}{' '}
                We will confirm by email when the process is complete.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#5b6558]">Request reference</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <code className="rounded-lg bg-[#faf7f2] px-3 py-2 text-lg font-bold tracking-wide text-[#1f3a17]">
                    {result?.reference}
                  </code>
                  <button
                    type="button"
                    onClick={copyRef}
                    className="rounded-full border border-[#1f3a17]/25 px-4 py-2 text-sm font-semibold text-[#1f3a17] transition-colors hover:bg-[#1f3a17] hover:text-white"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="mt-3 text-sm text-[#5b6558]">
                  Keep this reference and quote it if you contact us about this request.
                </p>
              </div>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              aria-labelledby="hv-del-form-title"
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-xl shadow-[#1f3a17]/5 sm:p-9"
            >
              <h2 id="hv-del-form-title" className="hv-display mb-1 text-2xl font-bold text-[#1f3a17]">
                Deletion request form
              </h2>
              <p className="mb-7 text-sm text-[#5b6558]">
                Fields marked <span className="text-red-600">*</span> are required.
              </p>

              {serverError && (
                <div role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {serverError}
                </div>
              )}

              <div className="space-y-5">
                <Field id="fullName" label="Full Name" required error={errors.fullName}>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={set('fullName')}
                    onBlur={blur('fullName')}
                    disabled={submitting}
                    maxLength={120}
                    className={fieldCls(errors.fullName)}
                    placeholder="Your full name"
                    {...aria('fullName')}
                  />
                </Field>

                <Field
                  id="email"
                  label="Registered Email Address"
                  required
                  error={errors.email}
                  hint="The email address you used to register on HomeVista."
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    onBlur={blur('email')}
                    disabled={submitting}
                    maxLength={254}
                    className={fieldCls(errors.email)}
                    placeholder="name@example.com"
                    {...aria('email', true)}
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone Number" optional error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={set('phone')}
                      onBlur={blur('phone')}
                      disabled={submitting}
                      maxLength={20}
                      className={fieldCls(errors.phone)}
                      placeholder="+234 …"
                      {...aria('phone')}
                    />
                  </Field>

                  <Field id="accountType" label="Account Type" required error={errors.accountType}>
                    <select
                      id="accountType"
                      name="accountType"
                      value={values.accountType}
                      onChange={set('accountType')}
                      onBlur={blur('accountType')}
                      disabled={submitting}
                      className={fieldCls(errors.accountType)}
                      {...aria('accountType')}
                    >
                      <option value="">Select account type</option>
                      {ACCOUNT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  id="reason"
                  label="Reason for Deletion"
                  optional
                  error={errors.reason}
                  hint={`${values.reason.length}/1000`}
                >
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    value={values.reason}
                    onChange={set('reason')}
                    disabled={submitting}
                    maxLength={1000}
                    className={`${fieldCls(errors.reason)} resize-y`}
                    placeholder="Tell us why you are leaving (optional)"
                    {...aria('reason', true)}
                  />
                </Field>

                {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={set('website')}
                  />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#faf7f2] p-4">
                    <input
                      type="checkbox"
                      name="confirm"
                      checked={values.confirm}
                      onChange={set('confirm')}
                      disabled={submitting}
                      className="mt-1 h-5 w-5 shrink-0 accent-[#467434]"
                      {...aria('confirm')}
                    />
                    <span className="text-sm leading-relaxed text-[#3d463a]">
                      I understand that deleting my HomeVista account is{' '}
                      <strong>permanent</strong> and cannot be undone, and that some records may be
                      retained where the law requires. <span className="text-red-600">*</span>
                    </span>
                  </label>
                  {errors.confirm && (
                    <p id="confirm-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
                      {errors.confirm}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-6 rounded-xl border border-[#f58f20]/30 bg-[#fff6ea] p-4 text-sm text-[#7a4a0a]">
                For your security, <strong>never include your password, BVN or bank details</strong>{' '}
                in this form. We will never ask for them here.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c0392b] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#a52f23] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <span className="hv-spinner" aria-hidden="true" />
                    Submitting request…
                  </>
                ) : (
                  'Request Account Deletion'
                )}
              </button>
              <p className="mt-4 text-xs text-[#5b6558]">
                Your details are used only to process this request, as described in our{' '}
                <Link to={routes.privacy} className="font-semibold underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>

        {/* Information */}
        <aside className="space-y-8">
          <Reveal>
            <section aria-labelledby="after-title" className="rounded-3xl bg-[#faf7f2] p-7">
              <h2 id="after-title" className="hv-display mb-5 text-xl font-bold text-[#1f3a17]">
                What happens after submission?
              </h2>
              <ol className="space-y-4">
                {[
                  'HomeVista receives the request.',
                  'Account ownership is verified where reasonably necessary.',
                  'Outstanding financial transactions and payout obligations are reviewed.',
                  'Eligible account information is deleted.',
                  'You receive confirmation when the process is completed.',
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f58f20] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-[0.95rem] leading-relaxed text-[#3d463a]">{t}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal delay={100}>
            <section aria-labelledby="retain-title" className="rounded-3xl border border-black/10 p-7">
              <h2 id="retain-title" className="hv-display mb-3 text-xl font-bold text-[#1f3a17]">
                Data that may be retained
              </h2>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-[#3d463a]">
                Deletion removes your account and eligible personal information. This is a permanent
                deletion, not just a deactivation. Certain records may be kept where required for:
              </p>
              <ul className="mb-4 space-y-2 text-[0.95rem] text-[#3d463a]">
                {[
                  'Legal obligations.',
                  'Financial recordkeeping.',
                  'Fraud prevention.',
                  'Security.',
                  'Dispute resolution.',
                  'Regulatory compliance.',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <i className="fas fa-circle-check mt-1 text-[#467434]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="grid gap-3 text-sm">
                <div className="rounded-xl bg-[#e8f0e4] p-4">
                  <p className="mb-1 font-semibold text-[#1f3a17]">Deleted</p>
                  <p className="text-[#3d463a]">
                    Your profile, login, contact details, saved preferences, listings and messages
                    that we are not required to keep.
                  </p>
                </div>
                <div className="rounded-xl bg-[#fff6ea] p-4">
                  <p className="mb-1 font-semibold text-[#7a4a0a]">May be retained</p>
                  <p className="text-[#3d463a]">
                    Transaction and payment records, payout records and related compliance, fraud
                    and security records, kept only for as long as the law or legitimate purposes
                    require.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={150}>
            <section aria-labelledby="help-title" className="rounded-3xl bg-[#1f3a17] p-7 text-white">
              <h2 id="help-title" className="hv-display mb-3 text-xl font-bold">
                Need help?
              </h2>
              <p className="text-sm leading-relaxed text-white/75">
                Prefer email, or having trouble with the form? Write to{' '}
                <a className="font-semibold text-[#f58f20] underline" href={`mailto:${HV.supportEmail}`}>
                  {HV.supportEmail}
                </a>{' '}
                with the subject “HomeVista account deletion”.
              </p>
              <p className="mt-4 text-sm text-white/60">
                Operated by {HV.operator}. See our{' '}
                <Link className="underline hover:text-[#f58f20]" to={routes.privacy}>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link className="underline hover:text-[#f58f20]" to={routes.terms}>
                  Terms
                </Link>
                .
              </p>
            </section>
          </Reveal>
        </aside>
      </div>
    </>
  )
}
