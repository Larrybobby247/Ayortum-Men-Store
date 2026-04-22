import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrandConfig } from "../data/config";

export default function BannerCTA() {
  return (
    <section className="relative bg-[#D4AF37] overflow-hidden py-14 md:py-16 px-6 md:px-10">
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #0A0A0A 25%, transparent 25%), linear-gradient(-45deg, #0A0A0A 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0A0A0A 75%), linear-gradient(-45deg, transparent 75%, #0A0A0A 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />
      {/* Left / right fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#c9a227]/60 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#c9a227]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <p className="font-['Cormorant_Garamond'] text-[#0A0A0A]/60 text-[11px] tracking-[0.4em] uppercase mb-2">
            Ready to Elevate Your Wardrobe?
          </p>
          <h2 className="font-['Playfair_Display'] text-[#0A0A0A] text-2xl md:text-4xl font-bold leading-tight">
            Order Today — Delivered to Your Door
          </h2>
          <p className="font-['Cormorant_Garamond'] text-[#0A0A0A]/65 text-base mt-2 max-w-md">
            Same-day delivery in Lagos · 2–3 days nationwide · UK, USA, Canada
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={BrandConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-2.5 bg-[#0A0A0A] text-[#D4AF37] px-7 py-4 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#1a1a1a] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Order on WhatsApp
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[10px] group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href={BrandConfig.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-2.5 border-2 border-[#0A0A0A]/30 text-[#0A0A0A] px-7 py-4 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#0A0A0A]/10 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
            See on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
