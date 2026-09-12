import { motion } from 'framer-motion';

export default function FinalCTA() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-28 lg:py-40 bg-[#0d0806] relative overflow-hidden bg-noise">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600"
          alt="Café Aroma Background"
          className="w-full h-full object-cover opacity-25 filter blur-sm transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0806] via-[#0d0806]/80 to-[#0d0806]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-[#c89d66] font-semibold font-sans inline-block"
        >
          BEGIN YOUR RITUAL TODAY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
        >
          YOUR NEXT <br />
          <span className="font-normal italic text-gold-gradient font-serif">CUP IS WAITING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#f7f2ea]/75 font-light max-w-xl mx-auto leading-relaxed"
        >
          Freshly roasted, artisan crafted, delivered straight to your table or doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#c89d66] text-[#140d0a] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#f7f2ea] hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 text-center shadow-luxury"
          >
            ORDER NOW
          </a>

          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#1b120e] text-[#f7f2ea] border border-[#e0cda8]/25 font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:border-[#c89d66] hover:text-[#c89d66] transition-all text-center"
          >
            EXPLORE MENU
          </a>
        </motion.div>
      </div>
    </section>
  );
}
