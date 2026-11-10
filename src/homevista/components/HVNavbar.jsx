import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HVLogo from './HVLogo'
import { HV, routes, downloadUrl } from '../config'

const links = [
  { to: `${routes.home}#about`, label: 'About' },
  { to: `${routes.home}#features`, label: 'Features' },
  { to: `${routes.home}#how-it-works`, label: 'How it works' },
  { to: HV.explorePath, label: 'Properties' },
]

export default function HVNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const linkCls =
    'text-sm font-medium text-[#1c231a]/80 hover:text-[#f58f20] transition-colors'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={routes.home} aria-label="HomeVista home">
          <HVLogo />
        </Link>

        <nav aria-label="HomeVista main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className={linkCls}>
              {l.label}
            </Link>
          ))}
          <Link to="/" className={`${linkCls} border-l border-black/10 pl-8`}>
            <i className="fas fa-arrow-left mr-2 text-xs" aria-hidden="true" />
            Accurratte Hommes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#f58f20] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#d97a0e] hover:shadow-lg sm:inline-flex"
            >
              Get the app
            </a>
          ) : (
            <Link
              to={`${routes.home}#how-it-works`}
              className="hidden rounded-full bg-[#f58f20] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#d97a0e] hover:shadow-lg sm:inline-flex"
            >
              Get started
            </Link>
          )}
          <button
            type="button"
            className="p-2 text-[#1f3a17] lg:hidden"
            aria-expanded={open}
            aria-controls="hv-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="hv-mobile-menu"
        aria-label="HomeVista mobile"
        className={`overflow-hidden border-t border-black/5 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
        hidden={!open}
      >
        <ul className="space-y-1 px-4 py-4">
          {[
            ...links,
            { to: routes.privacy, label: 'Privacy Policy' },
            { to: routes.terms, label: 'Terms and Conditions' },
            { to: routes.deleteAccount, label: 'Account and Data Deletion' },
            { to: '/', label: 'Back to Accurratte Hommes' },
          ].map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="block rounded-lg px-3 py-3 text-[0.95rem] font-medium text-[#1c231a] hover:bg-[#e8f0e4]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
