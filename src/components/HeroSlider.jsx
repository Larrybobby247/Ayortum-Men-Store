import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'; // or use your icon library

import Img1 from '../assets/gallary12.png'; // Assuming you have a Gallery component for the gallery section
import Img2 from '../assets/news1.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      badge: { text: 'Established Since 2016', dot: true },
      titleParts: [
        'Providing Trusted ',
        { text: 'Real Estate', color: 'text-primary-orange' },
        ' & ',
        { text: 'Construction', color: 'text-primary-green' },
        ' Solutions Across Nigeria'
      ],
      description: 'Accurratte Hommes International is a leading real estate and construction company committed to delivering quality land acquisition, property development, project management, consultancy, and investment opportunities for clients in Nigeria and the diaspora.',
      buttons: [
        { text: 'Explore Properties', icon: 'arrow', style: 'primary', link: '/properties' },
        { text: 'Contact Us', icon: 'phone', style: 'outline', link: '/contact' }
      ],
      stats: [
        { target: 2016, suffix: '', label: 'Established Since' },
        { target: 50, suffix: '+', label: 'Delivered Projects' },
        { target: 20, suffix: '+', label: 'Professional Team' },
        { target: 500, suffix: '+', label: 'Trusted Clients' }
      ],
      showScrollIndicator: true
    },
    {
      id: 2,
      bgImage: Img1,
      badge: { text: 'New Development', dot: true },
      titleParts: [
        'Metrolux Estate: ',
        { text: 'Building Value', color: 'text-primary-orange' },
        '. Creating Wealth. Securing the Future'
      ],
      description: 'Discover Metrolux Estate — our premium upcoming development designed for modern living and smart investment. Premium plots and homes in a strategically located, master-planned community.',
      buttons: [
        { text: 'Learn More About Metrolux', icon: 'arrow', style: 'primary', link: '/metrolux' }
      ],
      stats: [
        { target: 100, suffix: '%', label: 'Premium Location' },
        { target: 24, suffix: '/7', label: 'Security & Power' },
        { target: 100, suffix: '%', label: 'Dry Land' },
        { target: 0, suffix: '', label: 'Flexible Payment' }
      ],
      showScrollIndicator: false
    },
    {
      id: 3,
      bgImage: Img2,
      badge: { text: 'Latest News', dot: false },
      category: 'news',
      titleParts: [
        'Metrolux Estate Unveils ',
        { text: 'Tobi Elegbede', color: 'text-primary-orange' },
        ' as Brand Ambassador'
      ],
      description: 'Real Estate Firm Unveils Actor, Comedian Tobi Elegbede as Brand Ambassador. A strategic partnership to bring visibility and trust to the Metrolux brand.',
      buttons: [
        { text: 'Read Full Story', icon: 'external', style: 'primary', link: 'https://example.com/news/metrolux-brand-ambassador', external: true }
      ],
      stats: null,
      showScrollIndicator: false
    }
  ];

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(autoplayRef.current);
  }, [nextSlide]);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 6000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  const renderTitle = (parts) => {
    return parts.map((part, i) => {
      if (typeof part === 'string') return <span key={i}>{part}</span>;
      return <span key={i} className={part.color}>{part.text}</span>;
    });
  };

  const renderButton = (btn, index) => {
    const baseClasses = "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all flex items-center gap-2 text-sm sm:text-base";
    const primaryClasses = "bg-primary-orange text-white hover:bg-primary-orange/90 hover:shadow-lg hover:shadow-primary-orange/30";
    const outlineClasses = "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20";

    const content = (
      <>
        <span>{btn.text}</span>
        {btn.icon === 'arrow' && <ArrowRight className="w-4 h-4" />}
        {btn.icon === 'phone' && <Phone className="w-4 h-4" />}
        {btn.icon === 'external' && <ExternalLink className="w-4 h-4" />}
      </>
    );

    if (btn.external) {
      return (
        <a key={index} href={btn.link} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${btn.style === 'primary' ? primaryClasses : outlineClasses}`}>
          {content}
        </a>
      );
    }

    return (
      <Link key={index} to={btn.link} className={`${baseClasses} ${btn.style === 'primary' ? primaryClasses : outlineClasses}`}>
        {content}
      </Link>
    );
  };

  return (
    <section 
      className="relative h-[130vh] lg:h-[150vh] flex items-center justify-center overflow-hidden bg-dark-grey"
      onMouseEnter={() => clearInterval(autoplayRef.current)}
      onMouseLeave={resetAutoplay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/90 via-dark-grey/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 lg:py-32">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 ${
                  index === currentSlide ? 'animate-fadeInRight' : ''
                }`}>
                  {slide.badge.dot && (
                    <span className="w-2 h-2 bg-primary-orange rounded-full animate-pulse" />
                  )}
                  <span className="text-white/90 text-sm font-medium">{slide.badge.text}</span>
                </div>

                {/* Category Tag */}
                {slide.category && (
                  <span className="inline-block bg-primary-orange/20 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-primary-orange/30">
                    {slide.category.toUpperCase()}
                  </span>
                )}

                {/* Title */}
                <h1 className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 ${
                  index === currentSlide ? 'animate-fadeInUp' : ''
                }`}>
                  {renderTitle(slide.titleParts)}
                </h1>

                {/* Description */}
                <p className={`text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed ${
                  index === currentSlide ? 'animate-fadeInUp delay-100' : ''
                }`}>
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className={`flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 ${
                  index === currentSlide ? 'animate-fadeInUp delay-200' : ''
                }`}>
                  {slide.buttons.map((btn, i) => renderButton(btn, i))}
                </div>

                {/* Stats */}
                {slide.stats && (
                  <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 ${
                    index === currentSlide ? 'animate-fadeInUp delay-300' : ''
                  }`}>
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {stat.target}{stat.suffix}
                        </div>
                        <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-orange w-8' : 'bg-white/40 hover:bg-white/60 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-medium hidden sm:block">
        <span className="text-white font-bold text-lg">0{currentSlide + 1}</span> / 0{slides.length}
      </div>

      {/* Scroll Indicator */}
      {slides[currentSlide]?.showScrollIndicator && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-orange rounded-full animate-pulse" />
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 z-20 w-full">
        <div
          className="h-full bg-primary-orange transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
      `}</style>
    </section>
  );
};

export default HeroSlider;