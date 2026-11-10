import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../config'

// Shared shell for the Privacy Policy and Terms pages: branded banner,
// sticky table of contents (desktop), numbered sections.
export default function LegalLayout({ eyebrow, title, intro, effectiveDate, sections, numbered = false, aside }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -65% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [sections])

  return (
    <>
      <section className="relative overflow-hidden bg-[#1f3a17] pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f58f20]/15" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 inline-block rounded-full bg-[#f58f20]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f58f20]">
            {eyebrow}
          </p>
          <h1 className="hv-display text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">{intro}</p>
          <p className="mt-6 text-sm text-white/55">Effective date: {effectiveDate}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-20">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#5b6558]">On this page</p>
            <ul className="space-y-1 border-l border-black/10">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      active === s.id
                        ? 'border-[#f58f20] font-semibold text-[#1f3a17]'
                        : 'border-transparent text-[#5b6558] hover:text-[#1f3a17]'
                    }`}
                  >
                    {numbered ? `${i + 1}. ` : ''}
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="hv-prose min-w-0 max-w-3xl">
          {aside}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-black/5 pb-8 pt-2 last:border-0">
              <h2 className="hv-display mb-4 mt-8 text-2xl font-bold text-[#1f3a17]">
                {numbered ? <span className="mr-2 text-[#f58f20]">{i + 1}.</span> : null}
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}

          <div className="mt-12 flex flex-wrap gap-4 rounded-2xl bg-[#faf7f2] p-6 text-sm">
            <span className="font-semibold text-[#1f3a17]">Related:</span>
            <Link to={routes.privacy}>Privacy Policy</Link>
            <Link to={routes.terms}>Terms and Conditions</Link>
            <Link to={routes.deleteAccount}>Account and Data Deletion</Link>
          </div>
        </article>
      </div>
    </>
  )
}
