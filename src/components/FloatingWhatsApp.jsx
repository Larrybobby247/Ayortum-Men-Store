import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { BrandConfig } from "../data/config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={BrandConfig.contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white shadow-lg shadow-black/40 hover:shadow-[#25D366]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Expanding label */}
      <span className="font-['Cormorant_Garamond'] text-[11px] tracking-[0.2em] uppercase font-bold whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-4 transition-all duration-300">
        Chat with us
      </span>
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </div>
    </a>
  );
}
