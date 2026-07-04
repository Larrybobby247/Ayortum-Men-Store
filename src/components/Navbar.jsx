import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/properties', label: 'Properties' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/news', label: 'News' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={Logo} alt={Logo} />
              </div>
              {/* <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-lg text-dark-grey leading-tight">Accurratte Hommes</h1>
                <p className="text-xs text-primary-orange font-medium tracking-wider">INTERNATIONAL</p>
              </div> */}
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary-orange after:w-full' : 'text-dark-grey hover:text-primary-orange'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden md:inline-flex bg-primary-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-orange/90 transition-all hover:shadow-lg hover:shadow-primary-orange/30"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-dark-grey hover:text-primary-orange transition-colors"
              >
                <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-white z-[60] shadow-2xl overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-serif">A</span>
              </div>
              <span className="font-serif font-bold text-dark-grey">Accurratte Hommes</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-dark-grey hover:text-primary-orange">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-3 px-4 rounded-lg hover:bg-gray-50 text-dark-grey font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-4 bg-primary-orange text-white py-3 px-6 rounded-full text-center font-semibold">
              Get Started
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">
              <i className="fas fa-map-marker-alt mr-2 text-primary-orange"></i>No. 47, Quarry Road, Abeokuta
            </p>
            <p className="text-sm text-gray-500">
              <i className="fas fa-envelope mr-2 text-primary-orange"></i>accurratteh@gmail.com
            </p>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-[55]" onClick={() => setMobileOpen(false)}></div>
      )}
    </>
  )
}
