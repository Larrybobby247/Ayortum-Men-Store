import { downloadUrl } from '../config'

// Links to the real app store listing when one is configured in config.js.
// Until then it renders a clearly disabled "Coming soon" button, never a dead link.
export default function DownloadButton({ children = 'Download HomeVista', variant = 'outline', className = '' }) {
  const styles = {
    outline:
      'border border-white/60 text-white hover:bg-white hover:text-[#1f3a17]',
    solid: 'bg-[#1f3a17] text-white hover:bg-[#14240f]',
    dark: 'border border-[#1f3a17]/30 text-[#1f3a17] hover:bg-[#1f3a17] hover:text-white',
  }
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-300'

  if (downloadUrl) {
    return (
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        <i className="fas fa-download" aria-hidden="true" />
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="The HomeVista app store listing is coming soon"
      className={`${base} ${styles[variant]} cursor-not-allowed opacity-70 ${className}`}
    >
      <i className="fas fa-download" aria-hidden="true" />
      {children}
      <span className="ml-1 rounded-full bg-[#f58f20] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">
        Coming soon
      </span>
    </button>
  )
}
