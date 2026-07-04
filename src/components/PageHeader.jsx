export default function PageHeader({ title, subtitle, icon, bgImage }) {
  return (
    <div className="relative py-32 bg-dark-grey overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-grey/80 to-dark-grey"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
          <i className={`fas ${icon}`}></i>
          <span>{title}</span>
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-white/70 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  )
}
