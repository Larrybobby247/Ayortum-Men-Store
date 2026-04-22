import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrandConfig } from "../data/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Gold geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gold bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* Decorative vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 opacity-20">
        <span
          className="font-['Cormorant_Garamond'] text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Est. Lagos, Nigeria
        </span>
        <div className="w-px h-20 bg-[#D4AF37]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.35em] uppercase">
            Nigeria's Premier Fabric Destination
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-['Playfair_Display'] text-white leading-[1.05] mb-6">
          <span className="animate-fade-up delay-200 block text-4xl sm:text-5xl md:text-7xl font-normal">
            Premium Fabrics
          </span>
          <span className="animate-fade-up delay-300 block text-4xl sm:text-5xl md:text-7xl font-bold text-[#D4AF37] italic mt-1">
            for the Modern
          </span>
          <span className="animate-fade-up delay-400 block text-4xl sm:text-5xl md:text-7xl font-normal">
            Gentleman
          </span>
        </h1>

        {/* Ornamental divider */}
        <div className="animate-fade-in delay-500 flex items-center justify-center gap-4 my-7">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
          <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
        </div>

        {/* Description */}
        <p className="animate-fade-up delay-500 font-['Cormorant_Garamond'] text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {BrandConfig.hero.description}
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BrandConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer group flex items-center gap-3 text-[#0A0A0A] px-8 py-4 font-['Cormorant_Garamond'] font-bold text-[13px] tracking-[0.25em] uppercase w-full sm:w-auto justify-center shadow-lg shadow-[#D4AF37]/20"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
            Order via WhatsApp
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href="#products"
            className="group flex items-center gap-3 border border-[#D4AF37]/40 text-[#D4AF37] px-8 py-4 font-['Cormorant_Garamond'] font-bold text-[13px] tracking-[0.25em] uppercase hover:bg-[#D4AF37]/10 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Browse Collection
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-700 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "12+", label: "Product Lines"   },
            { value: "500+", label: "Happy Clients"  },
            { value: "5★",  label: "Rated Service"   },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Playfair_Display'] text-[#D4AF37] text-2xl md:text-3xl font-bold">
                {s.value}
              </div>
              <div className="font-['Cormorant_Garamond'] text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors animate-bounce"
      >
        <span className="font-['Cormorant_Garamond'] text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
      </a>
    </section>
  );
}
