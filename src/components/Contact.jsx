import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone, faEnvelope, faLocationDot, faClock, faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrandConfig } from "../data/config";
import useReveal from "../hooks/useReveal";

const contactItems = [
  { icon: faPhone,       label: "Phone",   value: BrandConfig.contact.phone,       href: `tel:${BrandConfig.contact.phone}`       },
  { icon: faEnvelope,    label: "Email",   value: BrandConfig.contact.email,       href: `mailto:${BrandConfig.contact.email}`    },
  { icon: faLocationDot, label: "Address", value: BrandConfig.contact.address,     href: "https://maps.google.com/?q=Lekki+Lagos+Nigeria" },
  { icon: faClock,       label: "Hours",   value: BrandConfig.contact.workingDays, href: "#"                                      },
];

const socialLinks = [
  { icon: faWhatsapp,  label: "WhatsApp",  href: BrandConfig.contact.whatsapp  },
  { icon: faInstagram, label: "Instagram", href: BrandConfig.contact.instagram },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      {/* Background bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      {/* Right accent line */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="reveal font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
            Get In Touch
          </span>
          <h2 className="reveal delay-100 font-['Playfair_Display'] text-white text-3xl md:text-5xl font-bold mt-2">
            Contact Our Concierge
          </h2>
          <div className="reveal delay-200 flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <p className="reveal font-['Cormorant_Garamond'] text-white/55 text-lg leading-relaxed mb-10">
              {BrandConfig.contact.shortDescription}
            </p>

            {/* Contact detail rows */}
            <div className="flex flex-col gap-4 mb-10">
              {contactItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`reveal delay-${(i + 1) * 100} group flex items-start gap-4 p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/5 transition-all duration-300`}
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] text-sm transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Cormorant_Garamond'] text-[#D4AF37]/50 text-[10px] tracking-[0.25em] uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-['Cormorant_Garamond'] text-white/75 text-base truncate">
                      {item.value}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[#D4AF37]/0 group-hover:text-[#D4AF37]/40 text-[10px] mt-1 self-center transition-colors duration-300 flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal delay-500 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 border border-[#D4AF37]/20 px-5 py-3 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors"
                  />
                  <span className="font-['Cormorant_Garamond'] text-white/50 group-hover:text-white/80 text-[12px] tracking-[0.15em] uppercase transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp CTA card */}
          <div className="reveal delay-200 relative border border-[#D4AF37]/20 p-8 md:p-10 bg-white/[0.02]">
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50" />
            <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50" />
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50" />

            {/* WhatsApp icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
              <FontAwesomeIcon icon={faWhatsapp} className="text-[#D4AF37] text-2xl" />
            </div>

            <h3 className="font-['Playfair_Display'] text-white text-2xl font-bold mb-3">
              Chat with Us Directly
            </h3>
            <p className="font-['Cormorant_Garamond'] text-white/50 text-base leading-relaxed mb-8">
              Our team is available on WhatsApp for quick responses, fabric consultations,
              and custom order requests. Don't hesitate to reach out.
            </p>

            {/* Map placeholder */}
            <div className="relative mb-8 h-32 bg-[#D4AF37]/5 border border-[#D4AF37]/10 flex flex-col items-center justify-center gap-2 overflow-hidden">
              {/* decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <FontAwesomeIcon icon={faLocationDot} className="text-[#D4AF37]/50 text-2xl relative z-10" />
              <span className="font-['Cormorant_Garamond'] text-white/40 text-xs tracking-[0.2em] uppercase relative z-10">
                Lekki, Lagos, Nigeria
              </span>
              <a
                href="https://maps.google.com/?q=Lekki+Lagos+Nigeria"
                target="_blank"
                rel="noreferrer"
                className="font-['Cormorant_Garamond'] text-[#D4AF37]/60 hover:text-[#D4AF37] text-[10px] tracking-wider uppercase underline underline-offset-2 relative z-10 transition-colors"
              >
                Open in Maps →
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={BrandConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 btn-shimmer text-[#0A0A0A] px-6 py-4 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                Start a Conversation
              </a>
              <a
                href={`mailto:${BrandConfig.contact.email}`}
                className="flex items-center justify-center gap-3 border border-[#D4AF37]/30 text-[#D4AF37] px-6 py-4 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Send an Email
              </a>
            </div>

            <p className="mt-5 font-['Cormorant_Garamond'] text-white/20 text-xs text-center tracking-wider">
              Typical response within 1 hour · Mon – Sat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
