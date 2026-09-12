import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, type Product } from '../../data/products';
import { categories } from '../../data/categories';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs Bar */}
      <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 pt-2 no-scrollbar gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#c89d66] text-[#140d0a] shadow-glow font-bold'
                  : 'bg-[#1b120e] text-[#f7f2ea]/70 border border-[#e0cda8]/15 hover:border-[#c89d66]/50 hover:text-[#f7f2ea]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Product Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard
                product={product}
                index={idx}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Filter State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="font-serif text-2xl text-[#f7f2ea]">No products found in this category.</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="px-6 py-2 rounded-full bg-[#c89d66] text-[#140d0a] text-xs font-bold uppercase tracking-widest"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
