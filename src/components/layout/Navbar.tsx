import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const navLinks = [
  { name: 'MENU', href: '#menu' },
  { name: 'OUR STORY', href: '#experience' },
  { name: 'COFFEE', href: '#origin' },
  { name: 'CONTACT', href: '#visit' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#140d0a]/90 backdrop-blur-xl border-b border-[#e0cda8]/15 shadow-luxury py-3.5'
            : 'bg-gradient-to-b from-[#0d0806]/80 via-[#0d0806]/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c89d66] to-[#8c5e34] flex items-center justify-center text-[#140d0a] shadow-glow group-hover:scale-105 transition-transform duration-300">
                <Sparkles size={18} className="animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#f7f2ea] group-hover:text-[#c89d66] transition-colors duration-300">
                  CAFÉ AROMA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c89d66]/80 -mt-1 font-sans">
                  Artisan Roastery
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative text-xs uppercase tracking-[0.2em] font-medium text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors duration-300 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c89d66] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Cart Toggle */}
              <button
                onClick={toggleCart}
                className="relative p-2.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/20 text-[#f7f2ea] hover:border-[#c89d66] hover:text-[#c89d66] transition-all duration-300 group shadow-md"
                aria-label="Open cart"
                id="cart-button"
              >
                <ShoppingBag size={19} className="group-hover:scale-110 transition-transform duration-300" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-[#c89d66] to-[#b07d4f] text-[#140d0a] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-glow"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Order Now CTA */}
              <a
                href="#menu"
                onClick={(e) => scrollToSection(e, '#menu')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-[#c89d66] text-[#140d0a] hover:bg-[#f7f2ea] hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                ORDER NOW
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/20 text-[#f7f2ea] hover:text-[#c89d66] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0d0806]/85 backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-[#1b120e] border-l border-[#e0cda8]/15 shadow-2xl p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#e0cda8]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#c89d66] flex items-center justify-center text-[#140d0a]">
                      <Sparkles size={16} />
                    </div>
                    <span className="font-serif text-xl font-bold tracking-wider text-[#f7f2ea]">
                      CAFÉ AROMA
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-full text-[#f7f2ea]/60 hover:text-[#c89d66] hover:bg-[#261a14]"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-8 space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium tracking-[0.15em] text-[#f7f2ea]/90 hover:text-[#c89d66] hover:bg-[#261a14] transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#e0cda8]/15 space-y-4">
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, '#menu')}
                  className="block w-full text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#c89d66] text-[#140d0a]"
                >
                  ORDER NOW
                </a>
                <p className="text-center text-[10px] tracking-widest text-[#f7f2ea]/40 uppercase">
                  EST. 1998 • ARTISAN ROASTERY
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
