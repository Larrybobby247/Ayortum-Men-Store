import React from 'react'

const TestimonialCard = ({ testimonial, delay = 0 }) => {
  return (
    <div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-orange/50 transition-all"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star text-primary-orange text-sm"></i>
        ))}
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
          testimonial.initials === 'JD' || testimonial.initials === 'MO' ? 'bg-primary-orange' : 'bg-primary-green'
        }`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-white/60 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
