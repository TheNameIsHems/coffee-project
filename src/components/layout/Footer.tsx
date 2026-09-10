import { Coffee, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-coffee-900 to-espresso-900 text-coffee-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-xl bg-gradient-to-br from-coffee-500 to-coffee-700">
                <Coffee size={20} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">Café Aroma</span>
            </a>
            <p className="text-coffee-300 text-sm leading-relaxed mb-6">
              Crafting extraordinary coffee experiences since 1998. Every cup tells a story of dedication, quality, and passion.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-coffee-800/50 hover:bg-coffee-700/50 text-coffee-300 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-coffee-800/50 hover:bg-coffee-700/50 text-coffee-300 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Locations', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-coffee-300 hover:text-white text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Menu</h3>
            <ul className="space-y-3">
              {['Hot Coffees', 'Cold Coffees', 'Frappuccinos', 'Teas', 'Bakery'].map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-coffee-300 hover:text-white text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-coffee-400 mt-0.5 shrink-0" />
                <span className="text-coffee-300 text-sm">123 Espresso Lane, Coffee City, CC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-coffee-400 shrink-0" />
                <span className="text-coffee-300 text-sm">(555) 123-BREW</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-coffee-400 shrink-0" />
                <span className="text-coffee-300 text-sm">hello@cafearoma.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-coffee-400 text-xs">
            © {new Date().getFullYear()} Café Aroma. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-coffee-400 hover:text-coffee-200 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-coffee-400 hover:text-coffee-200 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
