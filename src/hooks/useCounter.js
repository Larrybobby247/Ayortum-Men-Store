import { useEffect, useRef, useState } from 'react'

export default function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const step = target / (duration / 16)
            let current = 0
            const update = () => {
              current += step
              if (current < target) {
                setCount(Math.floor(current))
                requestAnimationFrame(update)
              } else {
                setCount(target)
              }
            }
            update()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
