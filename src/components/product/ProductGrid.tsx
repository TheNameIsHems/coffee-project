import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-coffee-600 to-coffee-700 text-white shadow-lg shadow-coffee-600/25'
              : 'bg-coffee-50 text-coffee-600 hover:bg-coffee-100'
          }`}
        >
          All Items
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-coffee-600 to-coffee-700 text-white shadow-lg shadow-coffee-600/25'
                : 'bg-coffee-50 text-coffee-600 hover:bg-coffee-100'
            }`}
          >
            <span>{cat.icon}</span>
            <span className="hidden sm:inline">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-coffee-400 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
