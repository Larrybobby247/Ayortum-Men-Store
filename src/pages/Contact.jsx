import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import useScrollToTop from '../hooks/useScrollToTop'

export default function Contact() {
  useScrollToTop()

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out to us for any inquiries or to schedule a consultation."
        icon="fa-envelope"
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-map-marker-alt text-primary-orange text-xl"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm">No. 47, Opposite Federal Mortgage Bank,<br />Quarry Road, Abeokuta,<br />Ogun State, Nigeria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-phone text-primary-green text-xl"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-1">Phone Number</h4>
                    <p className="text-gray-600 text-sm">+234 708 140 2661</p>
                    <p className="text-gray-600 text-sm">+234 706 605 2919</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-envelope text-primary-orange text-xl"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm">accurratteh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-globe text-primary-green text-xl"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-1">Website</h4>
                    <p className="text-gray-600 text-sm">www.accurrattehommes.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fab fa-whatsapp text-primary-orange text-xl"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-1">WhatsApp</h4>
                    <p className="text-gray-600 text-sm">@accurrattehommes</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold text-dark-grey mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center text-primary-orange hover:bg-primary-orange hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center text-primary-orange hover:bg-primary-orange hover:text-white transition-all"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center text-primary-orange hover:bg-primary-orange hover:text-white transition-all"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center text-primary-orange hover:bg-primary-orange hover:text-white transition-all"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm isWhatsApp={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-serif text-3xl font-bold text-dark-grey mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our office at No. 47, Quarry Road, Abeokuta, Ogun State.</p>
          </div>
          <div className="rounded-2xl overflow-hidden h-96 bg-gray-200 flex items-center justify-center shadow-lg">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21315.88021958031!2d3.3384289924334656!3d7.135321568373415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2047%2C%20Opposite%20Federal%20Mortgage%20Bank%2C%20Quarry%20Road%2C%20Abeokuta%2C%20Ogun%20State!5e0!3m2!1sen!2sus!4v1783165773351!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
        </div>
      </section>
    </>
  )
}
