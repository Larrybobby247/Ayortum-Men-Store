import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
      setTimeout(() => setVisible(false), 500)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-primary-orange rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dark-grey font-semibold">Loading...</p>
      </div>
    </div>
  )
}
