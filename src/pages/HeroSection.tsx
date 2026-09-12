import { motion } from 'framer-motion';
import { Coffee, Sparkles, Compass } from 'lucide-react';

export default function HeroSection() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 lg:pt-32 pb-16 flex items-center justify-center overflow-hidden bg-noise"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3a281f]/40 to-[#c89d66]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8c5e34]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating beans/steam micro-elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 left-12 lg:left-24 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-[11px] font-sans tracking-widest text-[#c89d66] border border-[#e0cda8]/20 shadow-lg"
      >
        <Coffee size={13} />
        <span>100% SINGLE ORIGIN</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }} 
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 right-12 lg:right-24 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-card border border-[#e0cda8]/20 shadow-luxury"
      >
        <div className="w-8 h-8 rounded-full bg-[#c89d66]/20 flex items-center justify-center text-[#c89d66]">
          <Sparkles size={15} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#f7f2ea]/60">SIGNATURE ROAST</p>
          <p className="text-xs font-serif text-[#f7f2ea] font-medium">Aroma Gold Reserve</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Brand Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b120e] border border-[#e0cda8]/20 text-[#c89d66] text-xs font-sans tracking-[0.25em] uppercase shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89d66] animate-pulse" />
              <span>CAFÉ AROMA • EST. 1998</span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight leading-[0.9] text-[#f7f2ea]">
                YOUR DAILY <br />
                <span className="font-normal italic text-gold-gradient font-serif">RITUAL,</span> <br />
                ELEVATED.
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#f7f2ea]/75 font-sans font-light leading-relaxed tracking-wide"
            >
              Immerse yourself in precision-roasted single-origins, velvety microfoam art, and rare botanicals. Crafted with intention for those who seek perfection in every sip.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c89d66] text-[#140d0a] font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#f7f2ea] hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 text-center shadow-lg"
              >
                EXPLORE MENU
              </a>

              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1b120e] text-[#f7f2ea] border border-[#e0cda8]/25 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:border-[#c89d66] hover:text-[#c89d66] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Compass size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                <span>OUR STORY</span>
              </a>
            </motion.div>

            {/* Brand Detail Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="pt-6 border-t border-[#e0cda8]/15 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <p className="font-serif text-2xl text-[#f7f2ea]">100%</p>
                <p className="text-[10px] tracking-wider text-[#f7f2ea]/50 uppercase font-sans">Arabica Beans</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#c89d66]">84+</p>
                <p className="text-[10px] tracking-wider text-[#f7f2ea]/50 uppercase font-sans">Cupping Score</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#f7f2ea]">Ethical</p>
                <p className="text-[10px] tracking-wider text-[#f7f2ea]/50 uppercase font-sans">Direct Trade</p>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual Feature */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Hero Product Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden p-2 bg-gradient-to-b from-[#e0cda8]/25 via-[#3a281f]/40 to-[#140d0a] shadow-luxury"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200"
                  alt="Café Aroma Specialty Coffee"
                  className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-black/20" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card border border-[#e0cda8]/20 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#c89d66] font-semibold">
                        FEATURED SELECTION
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#f7f2ea] mt-0.5">
                        Vanilla Bean Macchiato
                      </h3>
                    </div>
                    <span className="font-serif text-lg font-bold text-[#c89d66]">
                      ₹340
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-2 text-[#f7f2ea]/50 hover:text-[#c89d66] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-light">
              SCROLL TO EXPLORE
            </span>
            <div className="w-8 h-12 rounded-full border border-[#e0cda8]/30 flex items-start justify-center p-2 group-hover:border-[#c89d66] transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#c89d66]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
