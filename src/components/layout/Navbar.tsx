import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Featured', href: '#featured' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-coffee-900/5 border-b border-coffee-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-coffee-600 to-coffee-800' 
                  : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}>
                <Coffee size={22} className={isScrolled ? 'text-white' : 'text-white'} />
              </div>
              <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-coffee-900' : 'text-white'
              }`}>
                Café Aroma
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-coffee-600 hover:text-coffee-900 hover:bg-coffee-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleCart}
                className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'text-coffee-700 hover:bg-coffee-50'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Open cart"
                id="cart-button"
              >
                <ShoppingBag size={22} />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'text-coffee-700 hover:bg-coffee-50'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-coffee-100">
                <span className="text-lg font-display font-bold text-coffee-900">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-coffee-50 text-coffee-500"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-coffee-700 hover:bg-coffee-50 hover:text-coffee-900 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
