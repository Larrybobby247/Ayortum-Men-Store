import { useState } from 'react'

export default function ContactForm({ isWhatsApp = true }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Select a service',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isWhatsApp) {
      const phoneNumber = "234XXXXXXXXXX" // Replace with actual WhatsApp number
      const text = `*New Inquiry from Accurratte Hommes Website*%0A%0A` +
        `*Name:* ${formData.fullName}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Service:* ${formData.service}%0A` +
        `*Subject:* ${formData.subject}%0A%0A` +
        `*Message:*%0A${formData.message}`

      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
    }

    setSubmitted(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Select a service',
      subject: '',
      message: ''
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="font-serif text-xl font-bold text-dark-grey mb-2">Send Us a Message</h3>
      <p className="text-gray-500 text-sm mb-6">
        {isWhatsApp
          ? 'Fill out the form and we will connect you via WhatsApp instantly.'
          : 'Fill out the form below and we will get back to you within 24 hours.'}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-dark-grey mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-grey mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-dark-grey mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white"
              placeholder="+234 XXX XXX XXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-grey mb-2">Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white"
            >
              <option>Select a service</option>
              <option>Real Estate Consultancy</option>
              <option>Building Construction</option>
              <option>Project Management</option>
              <option>Business Development</option>
              <option>Land Acquisition</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-dark-grey mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white"
            placeholder="Message subject"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-dark-grey mb-2">Message *</label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all bg-white resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary-orange text-white py-4 rounded-xl font-semibold hover:bg-primary-orange/90 transition-all hover:shadow-lg hover:shadow-primary-orange/30 flex items-center justify-center gap-2"
        >
          <span>{isWhatsApp ? 'Send via WhatsApp' : 'Send Message'}</span>
          <i className={`fas ${isWhatsApp ? 'fa-whatsapp' : 'fa-paper-plane'}`}></i>
        </button>
      </form>
      {submitted && (
        <div className="mt-4 p-4 bg-primary-green/10 border border-primary-green/30 rounded-xl text-primary-green text-sm text-center">
          <i className="fas fa-check-circle mr-2"></i>
          {isWhatsApp
            ? 'Opening WhatsApp with your message...'
            : 'Thank you! Your message has been sent successfully.'}
        </div>
      )}
    </div>
  )
}
