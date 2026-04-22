import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from "../data/config";
import useReveal from "../hooks/useReveal";

export default function Categories() {
  const ref = useReveal();
  return (
    <section id="categories" ref={ref} className="bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-10">
      {/* Section header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="reveal font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
            Explore
          </span>
          <h2 className="reveal delay-100 font-['Playfair_Display'] text-white text-3xl md:text-5xl font-bold mt-2">
            Our Collections
          </h2>
          <div className="reveal delay-200 flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#products"
              className={`reveal group relative flex flex-col items-center justify-center gap-4 p-6 md:p-8 border border-[#D4AF37]/10 bg-white/[0.02] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/40 transition-all duration-400 cursor-pointer overflow-hidden delay-${(i + 1) * 100}`}
            >
              {/* Corner accent */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 transition-all duration-300" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 transition-all duration-300" />

              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <FontAwesomeIcon
                  icon={cat.icon}
                  className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] text-lg transition-colors duration-300"
                />
              </div>
              <span className="font-['Cormorant_Garamond'] text-white/60 group-hover:text-white text-sm md:text-base text-center leading-tight tracking-wide transition-colors duration-300">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
