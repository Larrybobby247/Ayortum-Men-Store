import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../data/config";
import useReveal from "../hooks/useReveal";

function StarRow({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="text-[#D4AF37] text-[10px]" />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 font-['Playfair_Display'] text-[#D4AF37] font-bold text-sm select-none">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-[#070707] py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-10 left-10 font-['Playfair_Display'] text-[#D4AF37]/4 text-[200px] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
            Client Stories
          </span>
          <h2 className="font-['Playfair_Display'] text-white text-3xl md:text-5xl font-bold mt-2">
            What Gentlemen Say
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative p-7 border border-[#D4AF37]/10 bg-white/[0.02] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all duration-400 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#D4AF37]/20 text-2xl"
              />

              {/* Stars */}
              <StarRow count={t.rating} />

              {/* Text */}
              <p className="font-['Cormorant_Garamond'] text-white/65 text-base leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#D4AF37]/10">
                <Avatar name={t.name} />
                <div>
                  <p className="font-['Playfair_Display'] text-white text-sm font-semibold">
                    {t.name}
                  </p>
                  {t.verified && (
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-[#D4AF37] text-[10px]"
                      />
                      <span className="font-['Cormorant_Garamond'] text-[#D4AF37]/70 text-[10px] tracking-[0.2em] uppercase">
                        Verified Buyer
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "500+", label: "Orders Completed" },
            { value: "100%", label: "Authentic Fabrics"  },
            { value: "4.9",  label: "Average Rating"     },
            { value: "3 Days", label: "Max Nationwide Delivery" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="font-['Playfair_Display'] text-[#D4AF37] text-2xl md:text-3xl font-bold">
                {badge.value}
              </div>
              <div className="font-['Cormorant_Garamond'] text-white/30 text-[10px] tracking-[0.2em] uppercase mt-1">
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
