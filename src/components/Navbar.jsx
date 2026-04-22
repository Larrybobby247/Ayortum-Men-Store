import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrandConfig } from "../data/config";

const navLinks = [
  { label: "Home",        href: "#hero"         },
  { label: "About",       href: "#about"        },
  { label: "Categories",  href: "#categories"   },
  { label: "Products",    href: "#products"     },
  { label: "Why Us",      href: "#why-us"       },
  { label: "Testimonials",href: "#testimonials" },
  { label: "Contact",     href: "#contact"      },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(212,175,55,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 border-b border-[#D4AF37]/10 text-[11px] text-[#D4AF37]/60 font-['Cormorant_Garamond'] tracking-widest">
        <span>LEKKI, LAGOS · MON–SAT 9AM–6PM</span>
        <div className="flex items-center gap-5">
          <a href={BrandConfig.contact.whatsapp} target="_blank" rel="noreferrer"
             className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>WhatsApp</span>
          </a>
          <a href={BrandConfig.contact.instagram} target="_blank" rel="noreferrer"
             className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
          <a href={`tel:${BrandConfig.contact.phone}`}
             className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <FontAwesomeIcon icon={faPhone} />
            <span>{BrandConfig.contact.phone}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-['Playfair_Display'] text-[#D4AF37] text-xl md:text-2xl font-bold tracking-wider uppercase">
            Ayortum
          </span>
          <span className="font-['Cormorant_Garamond'] text-white/50 text-[10px] tracking-[0.3em] uppercase">
            Men's Store
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-['Cormorant_Garamond'] text-white/70 hover:text-[#D4AF37] text-[13px] tracking-[0.18em] uppercase transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={BrandConfig.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-5 py-2.5 text-[11px] font-['Cormorant_Garamond'] font-bold tracking-[0.2em] uppercase hover:bg-[#c9a227] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden text-[#D4AF37] text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#0A0A0A] border-t border-[#D4AF37]/10`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="font-['Cormorant_Garamond'] text-white/70 hover:text-[#D4AF37] text-base tracking-[0.15em] uppercase transition-colors border-b border-white/5 pb-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BrandConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="mt-2 flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-5 py-3 text-[12px] font-['Cormorant_Garamond'] font-bold tracking-[0.2em] uppercase"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
