import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}
