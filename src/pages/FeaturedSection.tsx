import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import Badge from '../components/ui/Badge';

export default function FeaturedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featured = getFeaturedProducts();
  const { addItem } = useCart();

  const handleAdd = (product: typeof featured[0]) => {
    const defaultSize = product.sizes.find((s) => s.name === 'Grande') || product.sizes[0];
    addItem(product, defaultSize);
  };

  return (
    <section id="featured" className="py-20 lg:py-28 bg-gradient-to-b from-cream-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="featured" className="mb-4">
            <Star size={12} /> Staff Picks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-900 mb-4">
            Featured Favorites
          </h2>
          <p className="text-coffee-400 text-lg max-w-2xl mx-auto">
            Handpicked by our baristas — the drinks our team loves and recommends.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {featured.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-72 snap-center"
              >
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-coffee-100/60 shadow-sm hover:shadow-xl hover:shadow-coffee-200/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-52 bg-gradient-to-br from-amber-50 via-cream-50 to-coffee-50 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500 select-none">
                      {product.image}
                    </span>
                    <div className="absolute top-3 left-3">
                      <Badge variant="featured"><Star size={10} /> Featured</Badge>
                    </div>
                    {product.seasonal && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="seasonal">Seasonal</Badge>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-coffee-900 text-lg mb-1">{product.name}</h3>
                    <p className="text-coffee-400 text-sm line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-coffee-700">${product.price.toFixed(2)}</span>
                      <button
                        onClick={() => handleAdd(product)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-coffee-600 to-coffee-700 text-white text-sm font-medium hover:from-coffee-700 hover:to-coffee-800 shadow-md shadow-coffee-600/20 transition-all duration-300 active:scale-95"
                      >
                        Add
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-cream-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-cream-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
