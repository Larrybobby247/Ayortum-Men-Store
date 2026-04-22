import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrandConfig, categories } from "../data/config";
import useReveal from "../hooks/useReveal";

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer ref={ref} className="bg-[#050505] border-t border-[#D4AF37]/10">

      {/* Newsletter strip */}
      <div className="border-b border-[#D4AF37]/10 py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="reveal font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase mb-1">
              Stay Updated
            </p>
            <h3 className="reveal delay-100 font-['Playfair_Display'] text-white text-xl md:text-2xl font-bold">
              New Arrivals & Exclusive Offers
            </h3>
            <p className="reveal delay-200 font-['Cormorant_Garamond'] text-white/40 text-sm mt-1">
              Be the first to know about new fabrics, limited editions, and promos.
            </p>
          </div>

          <div className="reveal delay-300 w-full md:w-auto">
            {submitted ? (
              <div className="flex items-center gap-3 px-6 py-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
                <FontAwesomeIcon icon={faCheck} className="text-[#D4AF37]" />
                <span className="font-['Cormorant_Garamond'] text-white/70 text-sm tracking-wide">
                  Thank you! We'll be in touch.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-stretch gap-0 w-full md:w-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="font-['Cormorant_Garamond'] text-white/80 text-sm bg-white/5 border border-[#D4AF37]/20 border-r-0 px-5 py-3.5 placeholder-white/25 focus:outline-none focus:border-[#D4AF37]/50 transition-colors w-full md:w-72"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-5 py-3.5 font-['Cormorant_Garamond'] font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#c9a227] transition-colors duration-300 flex-shrink-0"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="reveal mb-5">
            <span className="font-['Playfair_Display'] text-[#D4AF37] text-2xl font-bold tracking-wider uppercase block">
              Ayortum
            </span>
            <span className="font-['Cormorant_Garamond'] text-white/30 text-[10px] tracking-[0.3em] uppercase mt-0.5 block">
              Men's Store
            </span>
          </div>
          <p className="reveal delay-100 font-['Cormorant_Garamond'] text-white/40 text-base leading-relaxed max-w-xs mb-6">
            {BrandConfig.footer.description}
          </p>
          {/* Social icons */}
          <div className="reveal delay-200 flex gap-3">
            <a
              href={BrandConfig.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]/50 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href={BrandConfig.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]/50 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          {/* Contact quick-links under brand */}
          <div className="reveal delay-300 mt-6 flex flex-col gap-2">
            <a href={`tel:${BrandConfig.contact.phone}`}
               className="font-['Cormorant_Garamond'] text-white/35 hover:text-[#D4AF37] text-sm transition-colors duration-300 link-underline w-fit">
              {BrandConfig.contact.phone}
            </a>
            <a href={`mailto:${BrandConfig.contact.email}`}
               className="font-['Cormorant_Garamond'] text-white/35 hover:text-[#D4AF37] text-sm transition-colors duration-300 link-underline w-fit break-all">
              {BrandConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4 className="reveal font-['Playfair_Display'] text-white text-sm font-semibold mb-5 uppercase tracking-wider">
            Collections
          </h4>
          <ul className="flex flex-col gap-3">
            {categories.map((c, i) => (
              <li key={c.id}>
                <a
                  href="#products"
                  className={`reveal delay-${(i + 1) * 100} font-['Cormorant_Garamond'] text-white/40 hover:text-[#D4AF37] text-sm tracking-wide transition-colors duration-300 link-underline`}
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="reveal font-['Playfair_Display'] text-white text-sm font-semibold mb-5 uppercase tracking-wider">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home",         href: "#hero"         },
              { label: "About Us",     href: "#about"        },
              { label: "Products",     href: "#products"     },
              { label: "Why Choose Us",href: "#why-us"       },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact",      href: "#contact"      },
            ].map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`reveal delay-${(i + 1) * 100} font-['Cormorant_Garamond'] text-white/40 hover:text-[#D4AF37] text-sm tracking-wide transition-colors duration-300 link-underline`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4AF37]/8 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-['Cormorant_Garamond'] text-white/20 text-xs tracking-wider text-center sm:text-left">
          © {year} Ayortum Men's Store · All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block h-3 w-px bg-white/10" />
          <p className="font-['Cormorant_Garamond'] text-white/15 text-xs tracking-wider flex items-center gap-1.5">
            Crafted with
            <FontAwesomeIcon icon={faHeart} className="text-[#D4AF37]/30 text-[10px]" />
            in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
