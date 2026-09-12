import { Sparkles, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0604] text-[#f7f2ea]/70 border-t border-[#e0cda8]/15 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e0cda8]/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c89d66] flex items-center justify-center text-[#140d0a]">
                <Sparkles size={16} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#f7f2ea]">
                CAFÉ AROMA
              </span>
            </div>
            <p className="text-xs text-[#f7f2ea]/60 font-light max-w-sm leading-relaxed">
              Crafting extraordinary single-origin coffee rituals, rare botanicals, and French butter pastries. 
            </p>
            <p className="font-serif italic text-sm text-[#c89d66] pt-1">
              "CRAFTED WITH CARE. BREWED WITH PASSION."
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs uppercase tracking-[0.15em] font-medium">
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.25em] text-[#c89d66] font-bold">NAVIGATION</p>
              <a href="#menu" className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">MENU</a>
              <a href="#experience" className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">OUR STORY</a>
              <a href="#origin" className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">COFFEE ORIGIN</a>
              <a href="#visit" className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">CONTACT</a>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.25em] text-[#c89d66] font-bold">LEGAL</p>
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">PRIVACY POLICY</a>
              <a href="#terms" onClick={(e) => e.preventDefault()} className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">TERMS OF SERVICE</a>
              <a href="#cookies" onClick={(e) => e.preventDefault()} className="block text-[#f7f2ea]/80 hover:text-[#c89d66] transition-colors">COOKIES</a>
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <p className="text-[10px] tracking-[0.25em] text-[#c89d66] font-bold uppercase">CONNECT WITH US</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/15 hover:border-[#c89d66] hover:text-[#c89d66] transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/15 hover:border-[#c89d66] hover:text-[#c89d66] transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/15 hover:border-[#c89d66] hover:text-[#c89d66] transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 text-xs tracking-wider text-[#f7f2ea]/50 hover:text-[#c89d66] transition-colors group"
            >
              <span>BACK TO TOP</span>
              <div className="p-2 rounded-full bg-[#1b120e] border border-[#e0cda8]/15 group-hover:border-[#c89d66]">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#f7f2ea]/40 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} CAFÉ AROMA. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest">ESTABLISHED IN 1998 • NEW YORK</p>
        </div>

      </div>
    </footer>
  );
}
