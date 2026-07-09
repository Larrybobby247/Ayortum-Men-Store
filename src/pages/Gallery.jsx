import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'

import Img1 from '../assets/project2.jpg'
import Img2 from '../assets/gallary16.png'
import Img3 from '../assets/gallary8.jpg'
import Img4 from '../assets/project1.jpg'
import Img5 from '../assets/gallary12.png'
import Img6 from '../assets/project3.jpg'
import Img7 from '../assets/gallary14.jpg'
import Img8 from '../assets/gallary9.jpg'
import Img9 from '../assets/gallary10.jpg'
import Img10 from '../assets/gallary11.jpg'



const galleryItems = [
  { id: 1, img: Img1, category: 'lands' },
  { id: 2, img: Img2, category: 'estates' },
  { id: 3, img: Img3, category: 'houses' },
  { id: 4, img: Img4, category: 'construction' },
  { id: 5, img: Img5, category: 'inspection' },
  { id: 6, img: Img6, category: 'estates' },
  { id: 7, img: Img7, category: 'houses' },
  { id: 8, img: Img8, category: 'lands' },
  { id: 9, img: Img9, category: 'construction' },
  { id: 10, img: Img10, category: 'construction' },

]

export default function Gallery() {
  useScrollToTop()
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'lands', label: 'Lands' },
    { id: 'estates', label: 'Estates' },
    { id: 'houses', label: 'Houses' },
    { id: 'construction', label: 'Construction' },
    { id: 'inspection', label: 'Inspections' },
  ]

  const filtered = activeCategory === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Visual journey through our properties, projects, and site inspections."
        icon="fa-images"
        bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <section className="py-20 bg-gray-50">
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

          <div className="masonry-grid">
            {filtered.map((item, i) => (
              <div key={item.id} className="masonry-item rounded-2xl overflow-hidden cursor-pointer" onClick={() => setLightboxImage(item.img)} data-aos="zoom-in" data-aos-delay={(i % 3 + 1) * 100}>
                <img src={item.img} alt="Gallery" className="w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 text-white text-3xl hover:text-primary-orange transition-colors"><i className="fas fa-times"></i></button>
          <img src={lightboxImage} alt="Gallery" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </>
  )
}
