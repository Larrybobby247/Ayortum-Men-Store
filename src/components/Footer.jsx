import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-dark-grey text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
              {/* <div>
                <h3 className="font-serif font-bold text-lg leading-tight">Accurratte Hommes</h3>
                <p className="text-xs text-primary-orange tracking-wider">INTERNATIONAL</p>
              </div> */}
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing trusted real estate and construction solutions across Nigeria since 2013.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-primary-orange transition-colors text-sm">About Us</Link></li>
              <li><Link to="/properties" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Properties</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Services</Link></li>
              <li><Link to="/projects" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Real Estate Consultancy</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Building Construction</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Project Management</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Business Development</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary-orange transition-colors text-sm">Land Acquisition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary-orange mt-1"></i>
                <span className="text-white/60 text-sm">PA Adebesin plaza<br />Opp Quarry Imperial Hotel, Quarry Road, Abeokuta, Ogun State.</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary-orange"></i>
                <span className="text-white/60 text-sm">+234 708 140 2661</span>
                
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary-orange"></i>
                <span className="text-white/60 text-sm">accurratteh@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-globe text-primary-orange"></i>
                <span className="text-white/60 text-sm">www.accurrattehommes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; 2026 Accurratte Hommes International. All rights reserved. BN: 3130834</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-primary-orange text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
