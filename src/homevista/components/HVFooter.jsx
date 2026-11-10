import { Link } from 'react-router-dom'
import HVLogo from './HVLogo'
import { HV, routes } from '../config'

export default function HVFooter() {
  const link = 'text-sm text-white/65 transition-colors hover:text-[#f58f20]'
  return (
    <footer className="bg-[#14240f] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <HVLogo light />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              HomeVista is a real-estate discovery and transaction platform that helps people
              find properties, connect with property owners and agents, and access supported
              transaction services.
            </p>
          </div>

          <nav aria-label="HomeVista footer">
            <h2 className="hv-display mb-5 text-lg font-bold">HomeVista</h2>
            <ul className="space-y-3">
              <li><Link className={link} to={`${routes.home}#about`}>About HomeVista</Link></li>
              <li><Link className={link} to={routes.privacy}>Privacy Policy</Link></li>
              <li><Link className={link} to={routes.terms}>Terms and Conditions</Link></li>
              <li><Link className={link} to={routes.deleteAccount}>Account and Data Deletion</Link></li>
              <li><a className={link} href={`mailto:${HV.supportEmail}`}>Contact Support</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="hv-display mb-5 text-lg font-bold">Support</h2>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a className="hover:text-[#f58f20]" href={`mailto:${HV.supportEmail}`}>
                  {HV.supportEmail}
                </a>
              </li>
              <li>
                <a className="hover:text-[#f58f20]" href={`tel:${HV.phones[0].replace(/\s/g, '')}`}>
                  {HV.phones[0]}
                </a>
              </li>
              <li className="leading-relaxed">{HV.address}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-center text-sm text-white/45 md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} HomeVista. Developed and operated by{' '}
            <Link to="/" className="text-white/70 underline-offset-4 hover:text-[#f58f20] hover:underline">
              {HV.operator}
            </Link>
            .
          </p>
          <p>Part of the Accurratte Hommes family.</p>
        </div>
      </div>
    </footer>
  )
}
