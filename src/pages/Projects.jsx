import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { projects } from '../data/projects'

export default function Projects() {
  useScrollToTop()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'consultancy', label: 'Consultancy' },
    { id: 'construction', label: 'Construction' },
    { id: 'management', label: 'Management' },
    { id: 'development', label: 'Development' },
  ]

  const filtered = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="A showcase of our completed and ongoing projects across Nigeria."
        icon="fa-project-diagram"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full border text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-primary-orange text-white border-primary-orange' : 'border-gray-200 hover:border-primary-orange'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div key={project.id} className="group rounded-2xl overflow-hidden shadow-sm" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 100}>
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-primary-orange text-xs font-semibold">{project.type}</span>
                    <h3 className="text-white font-serif font-bold text-lg mt-1">{project.name}</h3>
                    <p className="text-white/70 text-sm mt-1">{project.location}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span><i className="fas fa-calendar mr-1 text-primary-orange"></i>{project.year}</span>
                    <span><i className={`fas ${project.status === 'Completed' ? 'fa-check-circle text-primary-green' : 'fa-spinner text-primary-orange'} mr-1`}></i>{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
