import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrandConfig } from "../data/config";

const milestones = [
  { year: "2019", label: "Founded in Lagos" },
  { year: "2021", label: "Expanded nationwide" },
  { year: "2023", label: "International shipping launched" },
  { year: "2024", label: "500+ happy clients" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Background texture grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Gold bloom right */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_50%_60%_at_90%_30%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Visual panel */}
          <div className="relative">
            {/* Main decorative frame */}
            <div className="relative border border-[#D4AF37]/20 p-8 md:p-12 bg-[#D4AF37]/[0.03]">
              {/* Corner marks */}
              <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/60" />
              <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]/60" />
              <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]/60" />
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/60" />

              {/* Big decorative letter */}
              <div
                className="font-['Playfair_Display'] text-[#D4AF37]/[0.07] font-bold leading-none select-none text-center"
                style={{ fontSize: "clamp(120px, 18vw, 220px)" }}
              >
                A
              </div>

              {/* Overlaid quote */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center gap-4">
                <div className="w-8 h-px bg-[#D4AF37]/40" />
                <p className="font-['Playfair_Display'] text-white/80 text-xl md:text-2xl italic leading-snug">
                  "Elevating traditional attire,<br />one yard at a time."
                </p>
                <div className="w-8 h-px bg-[#D4AF37]/40" />
                <span className="font-['Cormorant_Garamond'] text-[#D4AF37]/60 text-[10px] tracking-[0.35em] uppercase">
                  — Ayortum Men's Store
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 md:-right-8 w-24 h-24 md:w-28 md:h-28 bg-[#D4AF37] flex flex-col items-center justify-center text-[#0A0A0A]">
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold leading-none">5+</span>
              <span className="font-['Cormorant_Garamond'] text-[9px] tracking-[0.2em] uppercase font-bold mt-1 text-center leading-tight px-2">
                Years of<br />Excellence
              </span>
            </div>
          </div>

          {/* RIGHT — Story text */}
          <div>
            <span className="font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
              Our Story
            </span>
            <h2 className="font-['Playfair_Display'] text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Nigeria's Premier <br />
              <span className="text-[#D4AF37] italic">Fabric Destination</span>
            </h2>

            <div className="w-12 h-px bg-[#D4AF37]/40 my-7" />

            <div className="space-y-5 font-['Cormorant_Garamond'] text-white/55 text-[17px] leading-relaxed">
              <p>
                Born from a passion for the modern Nigerian gentleman's aesthetic, Ayortum Men's Store was founded in the heart of Lagos with one mission — to make premium fabrics accessible to every man who values quality craftsmanship.
              </p>
              <p>
                We source directly from world-class mills in Switzerland, Italy, and Ireland, ensuring every yard that leaves our store meets an uncompromising standard of authenticity. From the soft drape of our Irish Wool to the crisp texture of our Swiss Dot cotton, each fabric tells a story.
              </p>
              <p>
                Today, we serve clients across Nigeria and beyond — from Lekki to London, Abuja to Atlanta — with the same commitment to quality and personal service that started it all.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {milestones.map((m) => (
                <div key={m.year} className="border-l-2 border-[#D4AF37]/30 pl-3">
                  <div className="font-['Playfair_Display'] text-[#D4AF37] text-lg font-bold">
                    {m.year}
                  </div>
                  <div className="font-['Cormorant_Garamond'] text-white/35 text-xs tracking-wide mt-0.5 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={BrandConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 bg-[#D4AF37] text-[#0A0A0A] px-7 py-3.5 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#c9a227] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                Shop Now
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={BrandConfig.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 border border-[#D4AF37]/30 text-[#D4AF37] px-7 py-3.5 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
                Follow on IG
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
