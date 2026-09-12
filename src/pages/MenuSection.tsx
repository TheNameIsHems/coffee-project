import { motion } from 'framer-motion';
import ProductGrid from '../components/product/ProductGrid';

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#140d0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans"
          >
            ARTISAN CREATIONS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
          >
            FIND YOUR <br />
            <span className="font-normal italic text-gold-gradient font-serif">PERFECT CUP.</span>
          </motion.h2>

          <p className="text-base text-[#f7f2ea]/70 font-light max-w-xl mx-auto leading-relaxed">
            Crafted from single-origin arabica, rare botanical teas, and French butter pastries.
          </p>
        </div>

        {/* Product Grid with Filters & Modals */}
        <ProductGrid />

      </div>
    </section>
  );
}
