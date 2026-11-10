import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HVNavbar from './components/HVNavbar'
import HVFooter from './components/HVFooter'
import './homevista.css'

// Standalone shell for the whole /homevista section. Rendered outside the
// Accurratte Hommes Navbar/Footer so HomeVista feels like its own product site.
export default function HomeVistaLayout() {
  const { pathname, hash } = useLocation()

  // Scroll to the anchor if there is one, otherwise to the top of the page.
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const t = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0 })
    return undefined
  }, [pathname, hash])

  return (
    <div className="hv-root">
      <a href="#hv-main" className="hv-skip">
        Skip to main content
      </a>
      <HVNavbar />
      <main id="hv-main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <HVFooter />
    </div>
  )
}
