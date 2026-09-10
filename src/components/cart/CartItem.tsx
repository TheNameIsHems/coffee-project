import { Minus, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart, type CartItem as CartItemType } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
  index: number;
}

export default function CartItem({ item, index }: CartItemProps) {
  const { updateQuantity } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex gap-4 p-3 rounded-xl hover:bg-coffee-50/50 transition-colors group"
    >
      {/* Product Image */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cream-50 to-coffee-50 flex items-center justify-center shrink-0">
        <span className="text-2xl select-none">{item.product.image}</span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-coffee-900 text-sm truncate">{item.product.name}</h4>
        <p className="text-xs text-coffee-400 mt-0.5">{item.selectedSize.name}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.selectedSize.name, item.quantity - 1)
              }
              className="p-1 rounded-lg border border-coffee-200 hover:border-coffee-400 text-coffee-500 hover:text-coffee-700 transition-colors"
              aria-label="Decrease quantity"
            >
              {item.quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
            </button>
            <span className="text-sm font-bold text-coffee-800 w-5 text-center">{item.quantity}</span>
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.selectedSize.name, item.quantity + 1)
              }
              className="p-1 rounded-lg border border-coffee-200 hover:border-coffee-400 text-coffee-500 hover:text-coffee-700 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="text-sm font-bold text-coffee-700">
            ${(item.selectedSize.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
