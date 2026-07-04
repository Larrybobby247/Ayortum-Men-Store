import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { Link } from 'react-router-dom'

const servicesList = [
  {
    icon: 'fa-chart-line',
    color: 'orange',
    title: 'Real Estate Consultancy',
    desc: 'Our expert consultants provide professional property advisory services and investment guidance to help you make informed decisions. Whether you are buying, selling, or investing, we offer comprehensive market analysis and strategic advice.',
    features: ['Property valuation and market analysis', 'Investment portfolio management', 'Due diligence and feasibility studies', 'Legal and documentation support'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop',
    reverse: false
  },
  {
    icon: 'fa-hard-hat',
    color: 'green',
    title: 'Building Construction',
    desc: 'From residential homes to commercial complexes, we deliver construction projects with precision, quality, and adherence to the highest industry standards. Our COREN-certified engineers ensure every project meets regulatory requirements.',
    features: ['Residential building construction', 'Commercial building projects', 'Renovation and remodeling', 'Quality materials and finishes'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop',
    reverse: true
  },
  {
    icon: 'fa-tasks',
    color: 'orange',
    title: 'Project Management',
    desc: 'We provide end-to-end supervision and management of development projects from concept to completion. Our project managers ensure timely delivery, budget control, and quality assurance at every stage.',
    features: ['Project planning and scheduling', 'Budget management and cost control', 'Quality assurance and inspections', 'Stakeholder coordination'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop',
    reverse: false
  },
  {
    icon: 'fa-briefcase',
    color: 'green',
    title: 'Business Development & Management',
    desc: 'We offer strategic planning and business growth solutions to help real estate businesses thrive. From market entry strategies to operational optimization, we provide the expertise you need to succeed.',
    features: ['Strategic business planning', 'Market entry and expansion', 'Operational optimization', 'Partnership development'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop',
    reverse: true
  }
]

export default function Services() {
  useScrollToTop()

  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Comprehensive real estate and construction solutions tailored to your needs."
        icon="fa-cogs"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesList.map((service, i) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${i === servicesList.length - 1 ? '' : ''}`}>
              <div className={service.reverse ? 'order-2 lg:order-1' : ''} data-aos={service.reverse ? 'fade-right' : 'fade-right'}>
                <img src={service.image} alt={service.title} className="rounded-2xl shadow-xl w-full" />
              </div>
              <div className={service.reverse ? 'order-1 lg:order-2' : ''} data-aos={service.reverse ? 'fade-left' : 'fade-left'}>
                <div className={`w-16 h-16 bg-primary-${service.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`fas ${service.icon} text-primary-${service.color} text-3xl`}></i>
                </div>
                <h2 className="font-serif text-3xl font-bold text-dark-grey mb-6">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-primary-green"></i>
                      <span className="text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center gap-2 bg-primary-${service.color} text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-${service.color}/90 transition-all`}>
                  Get Started <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
