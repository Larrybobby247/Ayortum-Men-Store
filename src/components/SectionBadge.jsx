import React from 'react'

const SectionBadge = ({ icon, text, color = 'orange' }) => {
  const colorClasses = {
    orange: 'bg-primary-orange/10 text-primary-orange',
    green: 'bg-primary-green/10 text-primary-green',
  }

  return (
    <div className={`inline-flex items-center gap-2 ${colorClasses[color]} rounded-full px-4 py-2 text-sm font-semibold mb-4`}>
      <i className={`fas ${icon}`}></i>
      <span>{text}</span>
    </div>
  )
}

export default SectionBadge
