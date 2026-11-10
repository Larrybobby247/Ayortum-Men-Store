import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import DownloadButton from '../components/DownloadButton'
import { HV, routes, downloadUrl } from '../config'

import heroImg from '../../assets/property2a.jpg'
import aboutImgA from '../../assets/property1a.jpg'
import aboutImgB from '../../assets/property4a.jpg'
import aboutImgC from '../../assets/property6a.jpg'

const features = [
  {
    icon: 'fa-magnifying-glass',
    title: 'Property Discovery',
    text: 'Browse property listings with images, descriptions, prices and relevant details.',
  },
  {
    icon: 'fa-comments',
    title: 'Buyer and Seller Connections',
    text: 'Communicate with property owners and agents through the platform.',
  },
  {
    icon: 'fa-user-circle',
    title: 'Personal Accounts',
    text: 'Create and manage your profile and account information.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Secure Payment Services',
    text: 'Access supported financial transactions through integrated payment services.',
  },
  {
    icon: 'fa-wallet',
    title: 'Digital Wallet',
    text: 'View applicable wallet balances, transaction records and payout information.',
  },
  {
    icon: 'fa-building',
    title: 'Property Management',
    text: 'Manage property-related information and interactions through available platform features.',
  },
]

const steps = [
  { n: 1, title: 'Create your HomeVista account', text: 'Sign up and set up your profile.' },
  { n: 2, title: 'Explore available properties', text: 'Browse listings and the details that matter.' },
  { n: 3, title: 'Connect with property owners or agents', text: 'Reach the right people through the platform.' },
  { n: 4, title: 'Proceed with your enquiries and transactions', text: 'Continue with your property enquiries and supported transactions.' },
]

export default function HomeVistaHome() {
  return (
    <>
      <Seo
        title="HomeVista | Property Discovery and Real-Estate Platform by Accurratte Hommes"
        description="Discover properties, connect with property owners and agents, and manage your real-estate transactions from one convenient platform. HomeVista is developed by Accurratte Hommes International."
        path={routes.home}
        image={heroImg}
      />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#14240f] pt-[72px]">
        <img
          src={heroImg}
          alt=""
          className="hv-hero-img absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14240f]/92 via-[#14240f]/70 to-[#14240f]/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#14240f]/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f58f20]/40 bg-[#f58f20]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f9b25f]">
                <span className="h-2 w-2 rounded-full bg-[#f58f20]" aria-hidden="true" />
                By Accurratte Hommes
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hv-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Find Your Next Property with <span className="text-[#f58f20]">HomeVista.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Discover properties, connect with property owners and agents, and manage your
                real-estate transactions from one convenient platform.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-wrap gap-4">
              <Link
                to={HV.explorePath}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f58f20] px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-[#f58f20]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97a0e]"
              >
                Explore Properties
                <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
              <DownloadButton variant="outline">Download HomeVista</DownloadButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-[#faf7f2] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f58f20]">About HomeVista</p>
            <h2 className="hv-display text-3xl font-bold text-[#1f3a17] sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Real Estate Discovery Made Easier.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#3d463a]">
              HomeVista is designed to simplify the way people discover properties and connect with
              property owners, sellers and real-estate agents. Through one convenient platform, users
              can explore property listings, communicate with relevant parties and access supported
              transaction services.
            </p>
            <p className="mt-5 text-[#5b6558]">
              HomeVista is developed and operated by{' '}
              <Link to="/" className="font-semibold text-[#467434] underline underline-offset-4 hover:text-[#d97a0e]">
                {HV.operator}
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-5 grid-rows-2 gap-4">
            <img
              src={aboutImgA}
              alt="A luxury duplex listed by Accurratte Hommes"
              loading="lazy"
              className="col-span-3 row-span-2 h-full min-h-[320px] w-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src={aboutImgB}
              alt="A detached duplex with a landscaped frontage"
              loading="lazy"
              className="col-span-2 h-full min-h-[150px] w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src={aboutImgC}
              alt="A modern residential property"
              loading="lazy"
              className="col-span-2 h-full min-h-[150px] w-full rounded-3xl object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f58f20]">Features</p>
            <h2 className="hv-display text-3xl font-bold text-[#1f3a17] sm:text-4xl">
              Everything in one platform
            </h2>
            <p className="mt-4 text-[#5b6558]">
              The tools you need to discover, connect and transact, built around how real-estate
              actually happens.
            </p>
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={(i % 3) * 90}>
                <article className="hv-card h-full rounded-3xl border border-black/[0.07] bg-white p-8">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0e4] text-xl text-[#467434]">
                    <i className={`fas ${f.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="hv-display mb-3 text-xl font-bold text-[#1f3a17]">{f.title}</h3>
                  <p className="leading-relaxed text-[#5b6558]">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-[#1f3a17] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f58f20]">How it works</p>
            <h2 className="hv-display text-3xl font-bold sm:text-4xl">Four simple steps</h2>
          </Reveal>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="hv-display mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f58f20] text-xl font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">
                    <span className="sr-only">Step {s.n}: </span>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#faf7f2] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="hv-display text-3xl font-bold text-[#1f3a17] sm:text-4xl lg:text-5xl">
              Your Next Property Journey Starts Here.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[#5b6558]">
              Discover opportunities and connect with the right people through HomeVista.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {downloadUrl ? (
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f58f20] px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-[#f58f20]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97a0e]"
                >
                  Get Started
                </a>
              ) : (
                <Link
                  to={`${routes.home}#how-it-works`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f58f20] px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-[#f58f20]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97a0e]"
                >
                  Get Started
                </Link>
              )}
              <DownloadButton variant="dark">Download the App</DownloadButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
