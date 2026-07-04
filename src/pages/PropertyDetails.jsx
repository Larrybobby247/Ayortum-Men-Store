import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { properties } from '../data/properties'

export default function PropertyDetails() {
  useScrollToTop()
  const { id } = useParams()
  const property = properties.find(p => p.id === parseInt(id)) || properties[0]

  return (
    <>
      <PageHeader
        title="Property Details"
        subtitle={property.location}
        icon="fa-info-circle"
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={property.image} alt={property.name} className="w-full h-96 object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4 mb-8">
                {property.gallery?.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i + 1}`} className="rounded-xl h-24 object-cover w-full cursor-pointer hover:opacity-80 transition-opacity" />
                ))}
              </div>

              <h2 className="font-serif text-2xl font-bold text-dark-grey mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{property.description}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This premium property is strategically located with proximity to major roads, schools, hospitals, and shopping centers. This makes it an ideal investment for both immediate development and long-term appreciation.
              </p>

              <h3 className="font-serif text-xl font-bold text-dark-grey mb-4">Features & Amenities</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {property.features?.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <i className="fas fa-check-circle text-primary-green"></i>
                    <span className="text-sm text-gray-600">{feat}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-xl font-bold text-dark-grey mb-4">Location Map</h3>
              <div className="rounded-2xl overflow-hidden h-80 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marked-alt text-primary-orange text-4xl mb-3"></i>
                  <p className="text-gray-500 text-sm">Google Maps Integration</p>
                  <p className="text-gray-400 text-xs mt-1">{property.location}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <div className="text-3xl font-bold text-primary-orange mb-2">{property.price}</div>
                <div className="text-gray-500 text-sm mb-6">Price per plot</div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Property Type</span>
                    <span className="font-semibold text-dark-grey text-sm">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">{property.size ? 'Land Size' : 'Floor Area'}</span>
                    <span className="font-semibold text-dark-grey text-sm">{property.size || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Location</span>
                    <span className="font-semibold text-dark-grey text-sm">{property.location.split(',')[0]}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Status</span>
                    <span className="font-semibold text-primary-green text-sm">Available</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Title</span>
                    <span className="font-semibold text-dark-grey text-sm">{property.title}</span>
                  </div>
                </div>

                <Link to="/contact" className="block w-full bg-primary-orange text-white text-center py-4 rounded-xl font-semibold hover:bg-primary-orange/90 transition-all mb-3">
                  Schedule a Visit
                </Link>
                <Link to="/contact" className="block w-full bg-white border-2 border-primary-orange text-primary-orange text-center py-4 rounded-xl font-semibold hover:bg-primary-orange hover:text-white transition-all">
                  Contact Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
