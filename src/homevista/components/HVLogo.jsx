export default function HVLogo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill="#f58f20" />
        <path
          d="M7 16.5 17 8l10 8.5V26a1 1 0 0 1-1 1h-5.5v-6.5h-7V27H8a1 1 0 0 1-1-1v-9.5Z"
          fill="#fff"
        />
      </svg>
      <span
        className={`hv-display text-[1.45rem] font-bold leading-none ${light ? 'text-white' : 'text-[#1f3a17]'}`}
      >
        Home<span className="text-[#f58f20]">Vista</span>
      </span>
    </span>
  )
}
