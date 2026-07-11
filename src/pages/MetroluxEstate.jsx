import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, Phone, MapPin, Mail, Clock, Shield, 
  Home, TrendingUp, Zap, TreePine, Building2, 
  Eye, CheckCircle, X, ChevronLeft, ChevronRight,
  ExternalLink, Send, MessageCircle
} from 'lucide-react';

import gallary16 from '../assets/gallary16.png';
import gallary12 from '../assets/gallary12.png';
import gallary14 from '../assets/gallary14.jpg';
import gallary9 from '../assets/gallary9.jpg';
import gallary10 from '../assets/gallary10.jpg';
import gallary11 from '../assets/gallary11.jpg';
import gallary8 from '../assets/gallary8.jpg';

const MetroluxEstate = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const colors = {
    orange: '#F58F20',
    green: '#467434',
    seaGrey: '#363636',
    lightGrey: '#F8F9FA'
  };

  const images = {
    hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    aerial: gallary9,
    entrance: gallary16,
    road: gallary14,
    green: gallary10,
    house: gallary8,
    survey: gallary11,
    layout: gallary12,
    modern: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80'
  };

  const galleryImages = [
    { src: images.entrance, title: 'Estate Entrance', span: 'col-span-2 row-span-2' },
    { src: images.road, title: 'Road Network', span: 'col-span-1 row-span-1' },
    { src: images.green, title: 'Green Areas', span: 'col-span-1 row-span-2' },
    { src: images.house, title: 'Residential Development', span: 'col-span-1 row-span-1' },
    { src: images.survey, title: 'Site Inspection', span: 'col-span-2 row-span-1' },
    { src: images.layout, title: 'Estate Layout', span: 'col-span-1 row-span-1' },
    { src: images.modern, title: 'Modern Houses', span: 'col-span-1 row-span-1' },
    { src: images.aerial, title: 'Aerial View', span: 'col-span-2 row-span-1' }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.observe-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextLightbox = useCallback(() => {
    setLightboxIndex(i => (i + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  // Feature cards data
  const aboutFeatures = [
    { icon: Shield, color: 'orange', title: 'Secure Gated Community', desc: '24/7 controlled access with professional security personnel and modern surveillance systems ensuring resident safety.' },
    { icon: Home, color: 'green', title: 'Premium Residential Layout', desc: 'Thoughtfully planned plots with optimal spacing, modern infrastructure, and aesthetic landscaping throughout the estate.' },
    { icon: TrendingUp, color: 'orange', title: 'High Investment Potential', desc: 'Strategically positioned for rapid appreciation with projected 50-80% land value growth within the first few years.' },
    { icon: MapPin, color: 'green', title: 'Strategic Location', desc: 'Located in a rapidly developing urban corridor with excellent connectivity to major business districts and amenities.' },
    { icon: Zap, color: 'grey', title: 'Modern Infrastructure', desc: 'Paved roads, drainage systems, electricity, and water supply all designed to international standards from day one.' },
    { icon: CheckCircle, color: 'orange', title: 'Trusted Development', desc: 'Backed by Accurratte Hommes International with over a decade of proven real estate and construction excellence.' }
  ];

  const estateFeatures = [
    { icon: Shield, title: 'Secure Gated Environment', desc: 'Controlled access with trained security personnel' },
    { icon: ArrowRight, title: 'Well Designed Road Network', desc: 'Interlocking paved roads with proper drainage' },
    { icon: Home, title: 'Perimeter Fencing', desc: 'Complete boundary wall for privacy and security' },
    { icon: TrendingUp, title: 'Modern Drainage System', desc: 'Underground water channels and flood control' },
    { icon: Zap, title: 'Electricity Infrastructure', desc: 'Underground cabling with transformer capacity' },
    { icon: TreePine, title: 'Recreational & Green Areas', desc: 'Parks, gardens, and community spaces' },
    { icon: Building2, title: 'Residential & Commercial', desc: 'Mixed-use zoning for diverse opportunities' },
    { icon: Eye, title: '24/7 Security', desc: 'Round-the-clock surveillance and patrol' }
  ];

  const whyInvest = [
    { num: '01', title: 'Strategic Location', desc: 'Positioned in a high-growth corridor with proximity to major highways, business districts, and essential amenities.' },
    { num: '02', title: 'Affordable Entry Price', desc: 'Competitive pricing structure that makes premium land ownership accessible to a wide range of investors.' },
    { num: '03', title: 'Secure Documentation', desc: 'All plots come with verified land titles, survey plans, and government-approved documentation.' },
    { num: '04', title: 'Flexible Payment Plans', desc: 'Spread your investment over comfortable monthly installments with zero hidden charges.' },
    { num: '05', title: 'Excellent Capital Appreciation', desc: 'Historical data and market trends project significant value growth in the short to medium term.' },
    { num: '06', title: 'Long-Term Wealth Creation', desc: 'Real estate remains one of the most reliable vehicles for generational wealth transfer.' },
    { num: '07', title: 'Growing Urban Development', desc: 'The surrounding area is experiencing rapid infrastructure and commercial development.' },
    { num: '08', title: 'Reliable Developer', desc: 'Accurratte Hommes International brings over a decade of trusted delivery and client satisfaction.' }
  ];

  const investmentHighlights = [
    { value: '30%', label: 'ROI within 12 Months', desc: 'Conservative projected return based on comparable developments' },
    { value: '50-80%', label: 'Land Appreciation', desc: 'Projected value increase within the first 24-36 months' },
    { value: '100%', label: 'Asset-Backed', desc: 'Every investment is secured by physical land with verified title' },
    { value: 'Flexible', label: 'Payment Plans', desc: 'Spread payments across 6 to 12 months with ease' },
    { value: 'Premium', label: 'Estate Development', desc: 'World-class infrastructure and amenities from day one' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#363636]">
      {/* Add Google Fonts in your index.html or _document.js:
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      */}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 143, 32, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(245, 143, 32, 0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .observe-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .observe-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}>
          <button onClick={closeLightbox} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
            <X size={20} />
          </button>
          <button onClick={prevLightbox} className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
            <ChevronLeft size={24} />
          </button>
          <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].title} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
          <button onClick={nextLightbox} className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* SUCCESS TOAST */}
      {formSubmitted && (
        <div className="fixed top-6 right-6 z-[999] bg-[#467434] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-[slideInRight_0.5s_ease]">
          <CheckCircle size={24} />
          <div>
            <div className="font-semibold">Message Sent!</div>
            <div className="text-sm opacity-90">We'll get back to you shortly.</div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" 
          style={{ backgroundImage: `url(${gallary16})`, backgroundPositionY: `${scrollY * 0.3}px` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/90 via-[#363636]/75 to-[#467434]/40" />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-[#F58F20]/30 animate-[float_6s_ease-in-out_infinite]"
            style={{ 
              width: [6, 8, 4, 10, 5][i], 
              height: [6, 8, 4, 10, 5][i],
              top: ['20%', '40%', '60%', '30%', '70%'][i],
              left: ['10%', '80%', '30%', '60%', '70%'][i],
              animationDelay: `${i}s`
            }} />
        ))}

        <div className="relative z-10 text-center max-w-[800px] px-6">
          <div className="inline-flex items-center gap-2 bg-[#F58F20]/15 border border-[#F58F20]/30 text-[#F58F20] px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <Home size={14} />
            Powered by Accurratte Hommes International
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
            Own a Piece of Tomorrow at <span className="text-[#F58F20]">Metrolux Estate</span>
          </h1>
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-[600px] mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Secure premium land ownership in a modern residential community designed for investors, homeowners, and future generations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <a href="#features" className="bg-[#F58F20] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#F58F20]/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F58F20]/30 flex items-center gap-2 text-sm">
              Explore Estate <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-transparent text-white px-8 py-3.5 rounded-full font-semibold border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 text-sm">
              Contact Us <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT METROLUX ESTATE */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto" id="about">
        <div className="observe-animate text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
            About <span className="text-[#F58F20]">Metrolux Estate</span>
          </h2>
          <p className="text-[#363636]/60 text-lg max-w-[600px] mx-auto mb-12 leading-relaxed">
            A premium residential development designed for secure, affordable, and high-value property ownership opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutFeatures.map((feature, i) => (
            <div key={i} className={`observe-animate delay-${(i % 6) + 1} bg-white rounded-2xl p-8 border border-[#363636]/8 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden`}>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F58F20] to-[#467434] scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                feature.color === 'orange' ? 'bg-[#F58F20]/10 text-[#F58F20]' :
                feature.color === 'green' ? 'bg-[#467434]/10 text-[#467434]' :
                'bg-[#363636]/8 text-[#363636]'
              }`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-[#363636]">{feature.title}</h3>
              <p className="text-[#363636]/60 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ESTATE FEATURES */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F8F9FA] to-white" id="features">
        <div className="observe-animate text-center max-w-[1200px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
            Estate <span className="text-[#467434]">Features</span>
          </h2>
          <p className="text-[#363636]/60 text-lg max-w-[600px] mx-auto mb-12">
            World-class amenities and infrastructure designed for modern living and smart investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
          {estateFeatures.map((item, i) => (
            <div key={i} className={`observe-animate delay-${(i % 6) + 1} bg-white rounded-2xl p-7 text-center border border-[#363636]/6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${i % 2 === 0 ? 'bg-[#F58F20]/10 text-[#F58F20]' : 'bg-[#467434]/10 text-[#467434]'}`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-[#363636] mb-2 text-base">{item.title}</h3>
              <p className="text-[#363636]/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY INVEST IN METROLUX */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto" id="invest">
        <div className="observe-animate text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
            Why Invest in <span className="text-[#F58F20]">Metrolux</span>
          </h2>
          <p className="text-[#363636]/60 text-lg max-w-[600px] mx-auto mb-12">
            Discover the compelling reasons why smart investors and homeowners choose Metrolux Estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyInvest.map((item, i) => (
            <div key={i} className={`observe-animate delay-${(i % 6) + 1} flex gap-5 items-start p-6 bg-white rounded-2xl border border-[#363636]/6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
              <div className="text-3xl font-extrabold text-[#F58F20]/30 leading-none flex-shrink-0">{item.num}</div>
              <div>
                <h3 className="font-bold text-[#363636] mb-1.5 text-base">{item.title}</h3>
                <p className="text-[#363636]/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INVESTMENT HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#363636] to-[#2a2a2a]">
        <div className="observe-animate text-center max-w-[1200px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Investment <span className="text-[#F58F20]">Highlights</span>
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto mb-12">
            Key metrics that demonstrate the value proposition of investing in Metrolux Estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1200px] mx-auto">
          {investmentHighlights.map((item, i) => (
            <div key={i} className={`observe-animate delay-${(i % 6) + 1} bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-8 text-center border border-[#363636]/6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden group`}>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F58F20] to-[#467434] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-extrabold bg-gradient-to-r from-[#F58F20] to-[#467434] bg-clip-text text-transparent mb-2">{item.value}</div>
              <div className="font-bold text-[#363636] mb-2 text-sm">{item.label}</div>
              <p className="text-[#363636]/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto" id="gallery">
        <div className="observe-animate text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
            Estate <span className="text-[#467434]">Gallery</span>
          </h2>
          <p className="text-[#363636]/60 text-lg max-w-[600px] mx-auto mb-12">
            Visual journey through the Metrolux Estate development and planned infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-[200px_200px_200px] gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div key={i} 
              className={`observe-animate delay-${(i % 6) + 1} relative rounded-2xl overflow-hidden cursor-pointer group ${img.span || ''}`}
              style={{ 
                gridColumn: img.span?.includes('col-span-2') ? 'span 2' : 'span 1',
                gridRow: img.span?.includes('row-span-2') ? 'span 2' : 'span 1'
              }}
              onClick={() => openLightbox(i)}>
              <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#363636]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <div className="text-white">
                  <div className="font-semibold text-base">{img.title}</div>
                  <div className="text-sm opacity-70 mt-1">Click to view</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROJECT VISION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="observe-animate text-center max-w-[800px] mx-auto">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F58F20] to-[#467434] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F58F20]/20">
            <Zap size={32} className="text-white" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-6">
            Our <span className="text-[#F58F20]">Vision</span>
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-[#363636]/70 italic font-serif">
            "To become one of the most sought-after residential communities by delivering quality infrastructure, secure land ownership, and exceptional investment opportunities."
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F58F20] to-[#467434] mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* 8. CALL-TO-ACTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F58F20] via-[#e07d15] to-[#467434] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-white -top-[100px] -right-[100px]" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-white -bottom-[50px] -left-[50px]" />
        </div>
        <div className="observe-animate relative z-10 text-center max-w-[700px] mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Invest Today. Secure Your Tomorrow.
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Join investors and homeowners building lasting wealth through smart real estate investment at Metrolux Estate.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="bg-white text-[#363636] px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 text-sm">
              Reserve Your Plot <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-transparent text-white px-8 py-3.5 rounded-full font-semibold border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 text-sm">
              Contact Our Team <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 9 & 10. CONTACT SECTION + FORM */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto" id="contact">
        <div className="observe-animate text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
            Get in <span className="text-[#F58F20]">Touch</span>
          </h2>
          <p className="text-[#363636]/60 text-lg max-w-[600px] mx-auto mb-12">
            Ready to secure your plot? Reach out to our team for enquiries, site visits, and reservations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="observe-animate delay-1">
            <div className="bg-white rounded-3xl p-8 border border-[#363636]/6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#363636]">Contact Information</h3>
              
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#F58F20]/10 text-[#F58F20] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#363636] mb-1 text-sm">Address</div>
                    <div className="text-[#363636]/60 text-sm leading-relaxed">No. 47, Opposite Federal Mortgage Bank, Quarry Road, Abeokuta, Ogun State.</div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#467434]/10 text-[#467434] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#363636] mb-1 text-sm">Phone</div>
                    <a href="tel:+2347066052919" className="text-[#363636]/60 text-sm hover:text-[#F58F20] transition-colors">+234 706 605 2919</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#F58F20]/10 text-[#F58F20] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#363636] mb-1 text-sm">Email</div>
                    <a href="mailto:accurratteh@gmail.com" className="text-[#363636]/60 text-sm hover:text-[#F58F20] transition-colors">accurratteh@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#467434]/10 text-[#467434] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#363636] mb-1 text-sm">Business Hours</div>
                    <div className="text-[#363636]/60 text-sm leading-relaxed">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-6">
                <div className="w-full h-[300px] rounded-2xl bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] flex items-center justify-center relative overflow-hidden">
                  
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21315.88021958031!2d3.3384289924334656!3d7.135321568373415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2047%2C%20Opposite%20Federal%20Mortgage%20Bank%2C%20Quarry%20Road%2C%20Abeokuta%2C%20Ogun%20State!5e0!3m2!1sen!2sus!4v1783165773351!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="observe-animate delay-2">
            <div className="bg-white rounded-3xl p-8 border border-[#363636]/6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#363636]">Send an Enquiry</h3>
              
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#363636] mb-1.5">Full Name</label>
                    <input type="text" className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#363636] mb-1.5">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all" placeholder="+234 800 000 0000" required />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#363636] mb-1.5">Email Address</label>
                  <input type="email" className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all" placeholder="john@example.com" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#363636] mb-1.5">Interested Property Size</label>
                    <select className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all bg-white" required>
                      <option value="">Select size</option>
                      <option value="300">300 SQM</option>
                      <option value="500">500 SQM</option>
                      <option value="600">600 SQM</option>
                      <option value="1000">1000 SQM</option>
                      <option value="custom">Custom Size</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#363636] mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all bg-white" required>
                      <option value="">Select subject</option>
                      <option value="plot">Plot Reservation</option>
                      <option value="inspection">Site Inspection</option>
                      <option value="investment">Investment Enquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-[#363636] mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3.5 border border-[#363636]/12 rounded-xl text-sm focus:outline-none focus:border-[#F58F20] focus:ring-3 focus:ring-[#F58F20]/10 transition-all resize-y" placeholder="Tell us about your interest in Metrolux Estate..." required />
                </div>
                
                <button type="submit" className="w-full bg-[#F58F20] text-white py-3.5 rounded-full font-semibold hover:bg-[#F58F20]/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F58F20]/30 flex items-center justify-center gap-2 text-sm">
                  Send Enquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <div className="bg-[#363636] py-10 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="font-serif text-2xl font-bold text-white mb-2">Metrolux Estate</div>
          <div className="text-white/50 text-sm mb-1">Building Value. Creating Wealth. Securing the Future.</div>
          <div className="text-white/30 text-xs">A subsidiary of Accurratte Hommes International</div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/2347066052919?text=Hello%2C%20I%20am%20interested%20in%20Metrolux%20Estate" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all animate-[pulse-glow_2s_infinite]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default MetroluxEstate;