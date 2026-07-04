import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'

export default function About() {
  useScrollToTop()

  const values = [
    { icon: 'fa-user-tie', color: 'orange', title: 'Professionalism', desc: 'Maintaining the highest standards in all our dealings.' },
    { icon: 'fa-shield-alt', color: 'green', title: 'Integrity', desc: 'Honest and ethical practices in every transaction.' },
    { icon: 'fa-bullseye', color: 'orange', title: 'Accuracy', desc: 'Precise information and reliable data for decisions.' },
    { icon: 'fa-handshake', color: 'green', title: 'Transparency', desc: 'Open communication and clear documentation.' },
    { icon: 'fa-lightbulb', color: 'orange', title: 'Innovation', desc: 'Embracing modern solutions and technology.' },
    { icon: 'fa-heart', color: 'green', title: 'Client Satisfaction', desc: 'Your success is our ultimate measure.' },
    { icon: 'fa-users', color: 'orange', title: 'Long-Term Relationships', desc: 'Building partnerships that last generations.' },
    { icon: 'fa-chart-line', color: 'green', title: 'Continuous Improvement', desc: 'Always evolving to serve you better.' },
  ]

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Building trust and delivering excellence in real estate and construction since 2013."
        icon="fa-building"
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="font-serif text-3xl font-bold text-dark-grey mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2013, Accurratte Hommes International began with a simple mission: to provide transparent, professional, and reliable real estate services to Nigerians at home and in the diaspora.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the past decade, we have grown from a small consultancy into a full-service real estate and construction company, delivering over 50 projects across multiple states in Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to accuracy, integrity, and client satisfaction has earned us the trust of hundreds of clients and partners. We continue to innovate and expand our services to meet the evolving needs of the Nigerian real estate market.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-orange">10+</div>
                  <div className="text-xs text-gray-500 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-orange">50+</div>
                  <div className="text-xs text-gray-500 mt-1">Projects Done</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-orange">500+</div>
                  <div className="text-xs text-gray-500 mt-1">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop" alt="Company Office" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-4 -right-4 bg-primary-green text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">BN: 3130834</div>
                <div className="text-xs opacity-80">CAC Registered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm" data-aos="fade-right">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-primary-orange text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-grey mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading Real Estate Consulting and Construction firm with outstanding and efficient service delivery, recognized across Nigeria and Africa for excellence, innovation, and client satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm" data-aos="fade-left">
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-primary-green text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-grey mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide the highest degree of skilled analysis and professional information necessary for the advancement of real estate and construction transactions, ensuring every client achieves their property goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-3xl font-bold text-dark-grey mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide every decision we make and every interaction we have with our clients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={val.title} className="bg-gray-50 rounded-2xl p-6 text-center card-hover" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className={`w-14 h-14 bg-primary-${val.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${val.icon} text-primary-${val.color} text-xl`}></i>
                </div>
                <h3 className="font-semibold text-dark-grey mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
