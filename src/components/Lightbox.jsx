import React, { useEffect } from 'react'

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!image) return null

  return (
    <div className="lightbox active" onClick={onClose}>
      <button
        className="absolute top-6 right-6 text-white text-3xl hover:text-primary-orange transition-colors z-10"
        onClick={onClose}
      >
        <i className="fas fa-times"></i>
      </button>
      <img src={image} alt="Gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default Lightbox
