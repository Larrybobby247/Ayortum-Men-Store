import { useEffect, useRef, useState } from 'react'

// Fades/slides children in once as they scroll into view.
// Falls back to visible content when IntersectionObserver is unavailable.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`hv-reveal ${shown ? 'hv-in' : ''} ${className}`}
      style={{ '--hv-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
