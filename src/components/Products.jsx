import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faRuler, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { products, BrandConfig, categories } from "../data/config";
import useReveal from "../hooks/useReveal";

const ALL = "All";

export default function Products() {
  const [active, setActive] = useState(ALL);
  const ref = useReveal();

  const tabs = [ALL, ...categories.map((c) => c.name)];

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);

  const countFor = (tab) =>
    tab === ALL ? products.length : products.filter((p) => p.category === tab).length;

  const whatsappOrder = (product) => {
    const msg = encodeURIComponent(
      `Hello Ayortum! I'm interested in:\n\n*${product.name}*\nPrice: ${product.price}${
        product.yardage ? `\nYardage: ${product.yardage}` : ""
      }\n\nKindly assist me with this order.`
    );
    return `https://wa.me/2349036560360?text=${msg}`;
  };

  return (
    <section
      id="products"
      ref={ref}
      className="relative bg-[#070707] py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal font-['Cormorant_Garamond'] text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
            Handpicked Selection
          </span>
          <h2 className="reveal delay-100 font-['Playfair_Display'] text-white text-3xl md:text-5xl font-bold mt-2">
            Featured Products
          </h2>
          <div className="reveal delay-200 flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
        </div>

        {/* Filter tabs with product counts */}
        <div className="reveal delay-300 flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`group font-['Cormorant_Garamond'] text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 flex items-center gap-2 ${
                active === tab
                  ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] font-bold"
                  : "border-[#D4AF37]/20 text-white/50 hover:border-[#D4AF37]/50 hover:text-white/80"
              }`}
            >
              {tab}
              <span
                className={`text-[9px] px-1.5 py-0.5 font-bold tabular-nums ${
                  active === tab
                    ? "bg-[#0A0A0A]/20 text-[#0A0A0A]"
                    : "bg-[#D4AF37]/10 text-[#D4AF37]/60 group-hover:bg-[#D4AF37]/20"
                }`}
              >
                {countFor(tab)}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`reveal delay-${Math.min((i % 4) * 100 + 100, 500)} product-card group relative bg-[#0f0f0f] border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  // loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.arrival === "top" && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#D4AF37] text-[#0A0A0A] px-2.5 py-1 text-[9px] font-['Cormorant_Garamond'] font-bold tracking-[0.2em] uppercase">
                    <FontAwesomeIcon icon={faBolt} className="text-[8px]" />
                    Top Pick
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-[#0A0A0A]/70 backdrop-blur-sm px-2.5 py-1 text-[9px] font-['Cormorant_Garamond'] text-[#D4AF37]/80 tracking-wider uppercase">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
                  <a
                    href={whatsappOrder(product)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 btn-shimmer text-[#0A0A0A] px-5 py-2.5 font-['Cormorant_Garamond'] font-bold text-[11px] tracking-[0.2em] uppercase translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Order Now
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-['Playfair_Display'] text-white text-base font-semibold leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="font-['Cormorant_Garamond'] text-white/40 text-sm leading-relaxed flex-1 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="font-['Playfair_Display'] text-[#D4AF37] text-lg font-bold">
                    {product.price}
                  </span>
                  {product.yardage && (
                    <span className="flex items-center gap-1.5 font-['Cormorant_Garamond'] text-white/30 text-[11px] tracking-wider">
                      <FontAwesomeIcon icon={faRuler} className="text-[9px]" />
                      {product.yardage}
                    </span>
                  )}
                </div>
                <a
                  href={whatsappOrder(product)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 sm:hidden flex items-center justify-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] px-4 py-2.5 font-['Cormorant_Garamond'] font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4AF37]/20 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Cormorant_Garamond'] text-white/30 text-lg tracking-wider">
              No products in this category yet.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="reveal font-['Cormorant_Garamond'] text-white/35 text-base mb-5">
            Don't see what you're looking for? We carry an even wider selection.
          </p>
          <a
            href={BrandConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="reveal delay-100 inline-flex items-center gap-3 border border-[#D4AF37]/40 text-[#D4AF37] px-8 py-4 font-['Cormorant_Garamond'] font-bold text-[12px] tracking-[0.25em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/70 transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Request a Custom Order
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[10px] group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
