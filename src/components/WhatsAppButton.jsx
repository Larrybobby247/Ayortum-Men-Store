export default function WhatsAppButton() {
  const phoneNumber = "234XXXXXXXXXX" // Replace with actual WhatsApp number
  const message = "Hello, I'm interested in Accurratte Hommes International services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}
