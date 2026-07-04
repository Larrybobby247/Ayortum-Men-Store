import React from 'react'

const NewsCard = ({ article, delay = 0 }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover" data-aos="fade-up" data-aos-delay={delay}>
      <div className="h-48 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            article.category === 'Real Estate News' || article.category === 'Construction' || article.category === 'Announcement'
              ? 'bg-primary-orange/10 text-primary-orange'
              : 'bg-primary-green/10 text-primary-green'
          }`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400">{article.date}</span>
        </div>
        <h3 className="font-serif font-bold text-dark-grey mb-2 hover:text-primary-orange transition-colors cursor-pointer">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
        <button className="text-primary-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          Read More <i className="fas fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  )
}

export default NewsCard
