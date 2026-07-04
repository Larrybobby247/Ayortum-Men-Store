import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { properties } from '../data/properties'

export default function Properties() {
  useScrollToTop()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'land', label: 'Lands' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'investment', label: 'Investment' },
  ]

  const filtered = properties.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.type.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <PageHeader
        title="Properties"
        subtitle="Browse our curated selection of premium properties available for sale, rent, and investment."
        icon="fa-home"
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-12" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search by name, location, or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-primary-orange text-white border-primary-orange' : 'border-gray-200 hover:border-primary-orange'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prop, i) => (
              <div key={prop.id} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 100}>
                <div className="relative img-zoom h-64">
                  <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                  <div className={`absolute top-4 left-4 ${prop.status === 'For Rent' ? 'bg-primary-green' : 'bg-primary-orange'} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {prop.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-dark-grey text-xs font-semibold px-3 py-1 rounded-full">
                    <i className="fas fa-map-marker-alt text-primary-orange mr-1"></i>{prop.location.split(',')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary-green bg-primary-green/10 px-2 py-1 rounded">{prop.type}</span>
                    <span className="text-xs font-medium text-gray-500">{prop.subType}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-dark-grey mb-2">{prop.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{prop.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary-orange font-bold text-lg">{prop.price}</div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      {prop.size && <span><i className="fas fa-ruler-combined mr-1"></i>{prop.size}</span>}
                      {prop.beds && <span><i className="fas fa-bed mr-1"></i>{prop.beds}</span>}
                      {prop.baths && <span><i className="fas fa-bath mr-1"></i>{prop.baths}</span>}
                    </div>
                  </div>
                  <Link to={`/properties/${prop.id}`} className="block w-full text-center bg-gray-100 text-dark-grey py-3 rounded-xl font-semibold hover:bg-primary-orange hover:text-white transition-all">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-gray-400 text-2xl"></i>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-grey mb-2">No properties found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
