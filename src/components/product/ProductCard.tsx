import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import type { Product } from '../../data/products';
import Badge from '../ui/Badge';
import ProductDetail from './ProductDetail';
import Modal from '../ui/Modal';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes.find((s) => s.name === 'Grande') || product.sizes[0];
    addItem(product, defaultSize);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coffee-200/40 transition-all duration-500 border border-coffee-100/60 cursor-pointer"
        onClick={() => setIsDetailOpen(true)}
      >
        {/* Product Image Area */}
        <div className="relative h-48 bg-gradient-to-br from-cream-50 to-coffee-50 flex items-center justify-center overflow-hidden">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-500 ease-out select-none">
            {product.image}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.featured && <Badge variant="featured"><Star size={10} /> Featured</Badge>}
            {product.seasonal && <Badge variant="seasonal">Seasonal</Badge>}
          </div>

          {/* Quick Add */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 p-2.5 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white rounded-xl shadow-lg shadow-coffee-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-coffee-700 hover:to-coffee-800"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={18} />
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-semibold text-coffee-900 group-hover:text-coffee-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="text-coffee-600 font-bold whitespace-nowrap">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-coffee-400 text-sm line-clamp-2 leading-relaxed mb-2">
            {product.description}
          </p>
          <span className="text-xs text-coffee-300">{product.calories}</span>
        </div>
      </motion.div>

      <Modal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        title={product.name}
      >
        <ProductDetail product={product} onClose={() => setIsDetailOpen(false)} />
      </Modal>
    </>
  );
}
