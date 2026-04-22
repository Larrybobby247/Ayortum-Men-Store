const promos = [
  "🇳🇬 Same-day delivery in Lagos",
  "✦ 100% Authentic Swiss Cotton & Italian Wools",
  "✈️ International shipping to UK, USA & Canada",
  "💬 WhatsApp consultations available Mon–Sat",
  "⭐ 500+ satisfied gentlemen nationwide",
  "🎁 Custom orders welcome — contact us today",
];

export default function PromoBar() {
  // Duplicate for seamless loop
  const items = [...promos, ...promos];

  return (
    <div className="bg-[#D4AF37] overflow-hidden py-2.5 relative z-50">
      <div className="flex items-center" style={{ animation: "marquee 28s linear infinite" }}>
        {items.map((promo, i) => (
          <span
            key={i}
            className="font-['Cormorant_Garamond'] text-[#0A0A0A] text-[11px] tracking-[0.2em] uppercase font-bold whitespace-nowrap px-8"
          >
            {promo}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
