import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-50 border border-coffee-100 mb-4">
            <UtensilsCrossed size={14} className="text-coffee-500" />
            <span className="text-coffee-600 text-sm font-medium">Our Full Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-900 mb-4">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-coffee-600 to-amber-600 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p className="text-coffee-400 text-lg max-w-2xl mx-auto">
            From bold espressos to soothing teas — find your perfect cup.
          </p>
        </motion.div>

        {/* Products */}
        <ProductGrid />
      </div>
    </section>
  );
}
