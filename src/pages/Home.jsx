import { Link } from 'react-router-dom'
import useCounter from '../hooks/useCounter'

import Img1 from '../assets/project2.jpg'
import Img2 from '../assets/project17.jpg'
import Img3 from '../assets/project5.jpg'
import Img4 from '../assets/project10.jpg'
import Img5 from '../assets/project6.jpg'

import property1 from '../assets/property1a.jpg'
import property2 from '../assets/property2a.jpg'
import property3 from '../assets/property3a.jpg'

import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import Team3 from '../assets/team3.jpg'
import Team4 from '../assets/team5.jpg'

import Partner1 from '../assets/partner1.png'
import Partner2 from '../assets/partner2.png'
import Partner3 from '../assets/partner3.png'
import Partner4 from '../assets/partner4.png'
import Partner5 from '../assets/partner5.png'
import Partner6 from '../assets/partner6.png'
import Partner7 from '../assets/partner7.png'

import News1 from '../assets/news1.jpg'
import News2 from '../assets/news2.jpg'
import News3 from '../assets/news3.jpeg'
import HeroSlider from '../components/HeroSlider'
import HomeVistaBanner from '../components/HomeVistaBanner'

function StatCard({ target, suffix, label, delay }) {
  const { count, ref } = useCounter(target, 2000)
  return (
    <div ref={ref} className="glass rounded-2xl p-4 text-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="text-3xl font-bold text-primary-orange mb-1">{count}{suffix}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-building"></i><span>About Us</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-6 leading-tight">
                Building Trust, Delivering <span className="text-primary-orange">Excellence</span> Since 2016
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accurratte Hommes International is a registered Nigerian real estate and construction company founded in 2016. The company provides land acquisition, housing solutions, construction services, project management, business development, and consultancy services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The organization is driven by innovation, professionalism, quality service delivery, and client satisfaction. Through experienced professionals and strategic partnerships, the company continues to provide affordable and reliable real estate opportunities.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2"><i className="fas fa-check-circle text-primary-green text-lg"></i><span className="text-sm font-medium text-dark-grey">CAC Registered</span></div>
                <div className="flex items-center gap-2"><i className="fas fa-check-circle text-primary-green text-lg"></i><span className="text-sm font-medium text-dark-grey">BN: 3130834</span></div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 bg-primary-green text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-all hover:shadow-lg">
                <span>Read More</span><i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <img src={Img1} alt="Luxury Home" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <img src={Img2} alt="Modern Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold font-serif">10+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-bullseye"></i><span>Our Foundation</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey">Mission, Vision & Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-6"><i className="fas fa-eye text-primary-orange text-2xl"></i></div>
              <h3 className="font-serif text-xl font-bold text-dark-grey mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">To be the leading Real Estate Consulting and Construction firm with outstanding and efficient service delivery across Nigeria and beyond.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-6"><i className="fas fa-rocket text-primary-green text-2xl"></i></div>
              <h3 className="font-serif text-xl font-bold text-dark-grey mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide the highest degree of skilled analysis and professional information necessary for the advancement of real estate and construction transactions.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100 md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-6"><i className="fas fa-gem text-primary-orange text-2xl"></i></div>
              <h3 className="font-serif text-xl font-bold text-dark-grey mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Professionalism', 'Integrity', 'Accuracy', 'Transparency', 'Innovation', 'Client Satisfaction', 'Long-Term Relationships', 'Continuous Improvement'].map((val) => (
                  <div key={val} className="flex items-center gap-2 text-sm text-gray-600"><i className="fas fa-check text-primary-green text-xs"></i>{val}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-cogs"></i><span>What We Do</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer comprehensive real estate and construction services tailored to meet your unique needs and investment goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-chart-line', color: 'orange', title: 'Real Estate Consultancy', desc: 'Professional property advisory services and investment guidance for informed decisions.' },
              { icon: 'fa-hard-hat', color: 'green', title: 'Building Construction', desc: 'Residential and commercial construction projects delivered with precision and quality.' },
              { icon: 'fa-tasks', color: 'orange', title: 'Project Management', desc: 'End-to-end supervision and management of development projects from concept to completion.' },
              { icon: 'fa-briefcase', color: 'green', title: 'Business Development', desc: 'Strategic planning and business growth solutions for sustainable success.' },
            ].map((service, i) => (
              <div key={service.title} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-orange/20" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className={`w-16 h-16 bg-primary-${service.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-${service.color} group-hover:scale-110 transition-all duration-300`}>
                  <i className={`fas ${service.icon} text-primary-${service.color} text-2xl group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-serif text-lg font-bold text-dark-grey mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="text-primary-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-home"></i><span>Portfolio</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey">Featured Properties</h2>
            </div>
            <Link to="/properties" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all">
              View All Properties <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: property1, badge: 'For Rent', badgeColor: 'bg-primary-green', loc: 'Orchid, Lekki, Lagos', tags: ['Residential', 'Duplex'], price: '₦10,000,000', detail: '4 Beds', name: '4 Bedroom Semi Detached Duplex for Rent' },
              { img: property2, badge: 'For Sale', badgeColor: 'bg-primary-orange', loc: 'Ikoyi, Lagos', tags: ['Residential', 'Duplex'], price: '₦3,500,000,000', detail: '5 Beds | 500sqm', name: 'Luxury 5-Bedroom Duplex' },
              { img: property3, badge: 'For Sale', badgeColor: 'bg-primary-orange', loc: 'Lekki Phase 1, Lagos', tags: ['Residential', 'Dulex'], price: '₦300,000,000', detail: '2 Beds', name: '2 Bedroom Apartment' },
            ].map((prop, i) => (
              <div key={prop.name} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="relative img-zoom h-64">
                  <img src={prop.img} alt={prop.name} className="w-full h-full object-cover" />
                  <div className={`absolute top-4 left-4 ${prop.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>{prop.badge}</div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-dark-grey text-xs font-semibold px-3 py-1 rounded-full">
                    <i className="fas fa-map-marker-alt text-primary-orange mr-1"></i>{prop.loc}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary-green bg-primary-green/10 px-2 py-1 rounded">{prop.tags[0]}</span>
                    <span className="text-xs font-medium text-gray-500">{prop.tags[1]}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-dark-grey mb-2">{prop.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{prop.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary-orange font-bold text-lg">{prop.price}</div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm"><span><i className="fas fa-ruler-combined mr-1"></i>{prop.detail}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-award"></i><span>Why Choose Us</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-6 leading-tight">
                Trusted Partner for Your <span className="text-primary-orange">Real Estate</span> Journey
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">We combine industry expertise, local market knowledge, and a client-first approach to deliver exceptional results every time.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: 'fa-shield-alt', color: 'orange', title: 'Registered & Trusted', desc: 'CAC certified company' },
                  { icon: 'fa-users', color: 'green', title: 'Professional Team', desc: 'COREN certified engineers' },
                  { icon: 'fa-handshake', color: 'orange', title: 'Transparent Transactions', desc: 'Clear documentation' },
                  { icon: 'fa-clock', color: 'green', title: 'Timely Delivery', desc: 'Projects on schedule' },
                  { icon: 'fa-piggy-bank', color: 'orange', title: 'Affordable Investment', desc: 'Flexible payment plans' },
                  { icon: 'fa-heart', color: 'green', title: 'Client-Centered', desc: 'Your satisfaction first' },
                  { icon: 'fa-laptop-code', color: 'orange', title: 'Modern Technology', desc: 'Digital tools & platforms' },
                  { icon: 'fa-globe-africa', color: 'green', title: 'Nationwide Vision', desc: 'Expanding across Nigeria' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 bg-primary-${item.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <i className={`fas ${item.icon} text-primary-${item.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-grey text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src={Img1} alt="Why Choose Us" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center"><i className="fas fa-star text-white"></i></div>
                  <div><div className="font-bold text-dark-grey">4.9/5 Rating</div><div className="text-xs text-gray-500">From 500+ Clients</div></div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star text-primary-orange text-sm"></i>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-dark-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-project-diagram"></i><span>Portfolio</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">Delivered Projects</h2>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all">
              View All Projects <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: Img4, type: 'Consultancy', name: 'Estate Advisory' },
              { img: Img2, type: 'Construction', name: 'Residential Complex' },
              { img: Img3, type: 'Management', name: 'Commercial Plaza' },
              { img: Img1, type: 'Development', name: 'Luxury Villas' },
            ].map((proj, i) => (
              <div key={proj.name} className="group relative rounded-2xl overflow-hidden h-80 img-zoom" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <img src={proj.img} alt={proj.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/90 via-dark-grey/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary-orange text-xs font-semibold">{proj.type}</span>
                  <h3 className="text-white font-serif font-bold text-lg mt-1">{proj.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-users"></i><span>Our Team</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A dedicated team of professionals committed to delivering excellence in every project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Amb. Egbetola Lekan', role: 'Managing Director', img: Team1 },
              { name: 'Engr. Aninkan A. Solomon', role: 'Senior Project Manager', cert: '(COREN Certified)', img: Team2 },
              { name: 'Barr. Abayomi O. Lydia', role: 'Legal Consultant', img: Team3 },
              { name: 'Olatunji Taofeeq', role: 'Project Manager', img: Team4 },
            ].map((member, i) => (
              <div key={member.name} className="team-card bg-white rounded-2xl overflow-hidden shadow-sm group" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="relative h-72 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  <div className="team-overlay absolute inset-0 bg-primary-orange/90 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-bold text-dark-grey">{member.name}</h3>
                  <p className="text-primary-orange text-sm font-medium mt-1">{member.role}</p>
                  {member.cert && <p className="text-gray-500 text-xs mt-1">{member.cert}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/team" className="inline-flex items-center gap-2 bg-primary-green text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-green/90 transition-all hover:shadow-lg">
              <span>View Full Team</span><i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-certificate"></i><span>Certifications</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-4">Certified & Compliant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-6 card-hover" data-aos="fade-right">
              <div className="w-20 h-20 bg-primary-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-file-contract text-primary-orange text-3xl"></i></div>
              <div>
                <h3 className="font-serif font-bold text-dark-grey text-lg">CAC Registration</h3>
                <p className="text-gray-600 text-sm mt-1">Corporate Affairs Commission Registered Business</p>
                <p className="text-primary-orange font-semibold text-sm mt-2">BN: 3130834</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-6 card-hover" data-aos="fade-left">
              <div className="w-20 h-20 bg-primary-green/10 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-award text-primary-green text-3xl"></i></div>
              <div>
                <h3 className="font-serif font-bold text-dark-grey text-lg">Professional Certifications</h3>
                <p className="text-gray-600 text-sm mt-1">COREN Certified Engineers & Industry Professionals</p>
                <p className="text-primary-green font-semibold text-sm mt-2">Verified Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-images"></i><span>Gallery</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey">Our Gallery</h2>
            </div>
            <Link to="/gallery" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all">
              View Full Gallery <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              Img1,
              Img2,
              Img3,
              Img5,
            ].map((img, i) => (
              <div key={i} className="img-zoom rounded-2xl overflow-hidden h-48 md:h-64 cursor-pointer" data-aos="zoom-in" data-aos-delay={(i + 1) * 100}>
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-handshake"></i><span>Partners</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey">Trusted By Industry Leaders</h2>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[1,2].map((set) => (
              <div key={set} className="flex items-center gap-16">
                {[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6].map((p) => (
                  <div key={`${set}-${p}`} className="flex items-center justify-center w-40 h-40  px-4">
                    {/* <span className="font-serif font-bold text-dark-grey text-lg">Partner {p}</span> */}
                    <img src={p} alt={`Partner ${p}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-newspaper"></i><span>News & Insights</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey">Latest Updates</h2>
            </div>
            <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all">
              View All News <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: News1, tag: 'Real Estate News', tagColor: 'primary-orange', date: 'July 2, 2026', title: 'Metrolux Estate Unveils Tobi Elegbede as Brand Ambassador', excerpt: 'Real Estate Firm Unveils Actor, Comedian Tobi Elebgede as Brand Ambassador', link: '' },
              { img: News2, tag: 'Construction', tagColor: 'primary-green', date: 'July 1, 2026', title: 'Accurratte Hommes Unveils New Hotel Masterpiece In Ogun', excerpt: 'Accurratte Hommes announces magnificent Hotel masterpiece in Ogun', link: '' },
              { img: News3, tag: 'Construction', tagColor: 'primary-orange', date: 'July 2, 2026', title: 'New Estate Development Project Launched', excerpt: 'Accurratte Hommes announces a new premium estate development in Abeokuta.', link: '' },
            ].map((article, i) => (
              <div key={article.title} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="h-48 overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-medium text-${article.tagColor} bg-${article.tagColor}/10 px-2 py-1 rounded`}>{article.tag}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-dark-grey mb-2 hover:text-primary-orange transition-colors cursor-pointer">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link to="/news" className="text-primary-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
            <HomeVistaBanner/>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <i className="fas fa-quote-left"></i><span>Testimonials</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Accurratte Hommes made land ownership easy for me.I was skeptical at first, but the team was transparent from inspection to documentation. I now have my plot with a clean C of O. No stories.", initials: 'MT', name: 'Mrs. Taiwo ', role: 'Plot Owner, Abeokuta' },
              { text: "From site visit to allocation, Accurratte Hommes was on point. They answered every question and didn’t hide any fees. I’ve referred 3 of my colleagues already.", initials: 'CE', name: 'Mr. Chinedu E.', role: 'Diaspora Investor', color: 'green' },
              { text: "Best real estate decision I’ve made. I bought 2 plots in Metrolux Estate this year and the value has already appreciated by 40%. The location and road network are top-notch. Accurratte Hommes delivers value.", initials: 'EY', name: 'Engr. Yusuf M.', role: 'Plot Owner, Abeokuta' },
            ].map((t, i) => (
              <div key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-orange/50 transition-all" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star text-primary-orange text-sm"></i>)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${t.color === 'green' ? 'bg-primary-green' : 'bg-primary-orange'} rounded-full flex items-center justify-center text-white font-bold`}>{t.initials}</div>
                  <div><div className="text-white font-semibold text-sm">{t.name}</div><div className="text-white/60 text-xs">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <i className="fas fa-envelope"></i><span>Contact Us</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark-grey mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Ready to start your real estate journey? Contact us today and let our experts guide you through every step.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0"><i className="fas fa-map-marker-alt text-primary-orange text-lg"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey">Office Address</h4>
                    <p className="text-gray-600 text-sm mt-1">PA Adebesin plaza<br />Opp Quarry Imperial Hotel, Quarry Road, Abeokuta, Ogun State.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0"><i className="fas fa-phone text-primary-green text-lg"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey">Phone Number</h4>
                    <p className="text-gray-600 text-sm mt-1">+234 708 140 2661</p>
                    <p className="text-gray-600 text-sm mt-1">+234 706 605 2919</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0"><i className="fas fa-envelope text-primary-orange text-lg"></i></div>
                  <div>
                    <h4 className="font-semibold text-dark-grey">Email Address</h4>
                    <p className="text-gray-600 text-sm mt-1">accurratteh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold text-dark-grey mb-6">Send Us a Message</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Opening WhatsApp...'); }}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-grey mb-2">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-grey mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-dark-grey mb-2">Message</label>
                    <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-orange text-white py-4 rounded-xl font-semibold hover:bg-primary-orange/90 transition-all hover:shadow-lg hover:shadow-primary-orange/30 flex items-center justify-center gap-2">
                    <span>Send via WhatsApp</span><i className="fab fa-whatsapp"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Invest in Real Estate with Confidence?</h2>
          <p className="text-white/90 mb-8 text-lg">Let Accurratte Hommes International guide you to your next property investment or construction project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg flex items-center gap-2">
              <span>Get Started</span><i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
              <span>Contact Us Today</span><i className="fas fa-phone"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
