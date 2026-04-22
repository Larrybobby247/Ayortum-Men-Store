import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyChooseUs } from "../data/config";
import useReveal from "../hooks/useReveal";

export default function WhyChooseUs() {
  const ref = useReveal();
  return (
    <section
      id="why-us"
      ref={ref}
      className="relative bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_50%_80%_at_100%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <div>
            <span className="reveal font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
              The Ayortum Difference
            </span>
            <h2 className="reveal delay-100 font-['Playfair_Display'] text-white text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Why Gentlemen <br />
              <span className="text-[#D4AF37] italic">Choose Us</span>
            </h2>
          </div>
          <p className="reveal delay-200 font-['Cormorant_Garamond'] text-white/50 text-lg leading-relaxed">
            We've built our reputation on three pillars — authentic materials, impeccable service, and a deep
            understanding of the Nigerian gentleman's wardrobe.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.id}
              className={`reveal delay-${(i + 1) * 100} group relative p-7 border border-[#D4AF37]/10 bg-white/[0.02] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/40 transition-all duration-400 flex flex-col gap-5`}
            >
              {/* Number accent */}
              <span className="absolute top-4 right-4 font-['Playfair_Display'] text-[#D4AF37]/8 text-5xl font-bold select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] text-base transition-colors duration-300"
                />
              </div>

              <div>
                <h3 className="font-['Playfair_Display'] text-white text-base font-semibold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-['Cormorant_Garamond'] text-white/45 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
