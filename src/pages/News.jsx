import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { newsArticles } from '../data/news'

export default function News() {
  useScrollToTop()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'Real Estate News' },
    { id: 'tips', label: 'Investment Tips' },
    { id: 'construction', label: 'Construction' },
    { id: 'trends', label: 'Market Trends' },
    { id: 'announcements', label: 'Announcements' },
  ]

  const filtered = activeCategory === 'all' ? newsArticles : newsArticles.filter(a => a.category === activeCategory)

  return (
    <>
      <PageHeader
        title="News & Insights"
        subtitle="Stay updated with the latest in real estate, construction, and market trends."
        icon="fa-newspaper"
        bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-primary-orange text-white border-primary-orange' : 'border-gray-200 hover:border-primary-orange'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 100}>
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary-orange bg-primary-orange/10 px-2 py-1 rounded">{article.categoryLabel}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-dark-grey mb-2 hover:text-primary-orange transition-colors cursor-pointer">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <span className="text-primary-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                    Read More <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
