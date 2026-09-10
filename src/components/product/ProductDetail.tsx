import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find((s) => s.name === 'Grande') || product.sizes[0]
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    onClose();
  };

  return (
    <div className="space-y-6">
      {/* Product Visual */}
      <div className="relative h-40 bg-gradient-to-br from-cream-50 to-coffee-50 rounded-xl flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="text-7xl select-none"
        >
          {product.image}
        </motion.span>
        <div className="absolute top-3 left-3 flex gap-2">
          {product.featured && <Badge variant="featured">⭐ Featured</Badge>}
          {product.seasonal && <Badge variant="seasonal">🌿 Seasonal</Badge>}
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-coffee-500 leading-relaxed">{product.description}</p>
        <p className="text-xs text-coffee-300 mt-2">{product.calories}</p>
      </div>

      {/* Size Selector */}
      {product.sizes.length > 1 && (
        <div>
          <h3 className="text-sm font-semibold text-coffee-800 mb-3">Select Size</h3>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 border-2 ${
                  selectedSize.name === size.name
                    ? 'border-coffee-600 bg-coffee-50 text-coffee-800'
                    : 'border-coffee-100 hover:border-coffee-200 text-coffee-500'
                }`}
              >
                <div>{size.name}</div>
                <div className="text-xs mt-0.5 font-bold">${size.price.toFixed(2)}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-semibold text-coffee-800 mb-3">Quantity</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 rounded-xl border-2 border-coffee-100 hover:border-coffee-300 text-coffee-600 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-bold text-coffee-800 w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 rounded-xl border-2 border-coffee-100 hover:border-coffee-300 text-coffee-600 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="pt-2">
        <Button onClick={handleAddToCart} className="w-full" size="lg">
          <ShoppingBag size={18} />
          Add to Cart — ${(selectedSize.price * quantity).toFixed(2)}
        </Button>
      </div>
    </div>
  );
}
