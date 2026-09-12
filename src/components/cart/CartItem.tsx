import { Trash2, Plus, Minus } from 'lucide-react';
import type { CartItem as CartItemType } from '../../contexts/CartContext';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, selectedSize } = item;

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-[#e0cda8]/15 bg-[#1b120e]">
      {/* Product Image */}
      <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#140d0a] shrink-0 border border-[#e0cda8]/10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info & Controls */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-1">
          <h4 className="font-serif text-base text-[#f7f2ea] font-medium truncate">
            {product.name}
          </h4>
          <span className="font-serif text-sm font-bold text-[#c89d66] shrink-0">
            ₹{(selectedSize.price * quantity).toLocaleString('en-IN')}
          </span>
        </div>

        <p className="text-[11px] text-[#c89d66]/80 font-sans">
          Size: {selectedSize.name}
        </p>

        {/* Quantity Controls & Remove */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 bg-[#140d0a] border border-[#e0cda8]/15 rounded-lg px-2 py-1">
            <button
              onClick={() => updateQuantity(product.id, selectedSize.name, quantity - 1)}
              className="text-[#f7f2ea]/60 hover:text-[#c89d66] p-0.5"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="text-xs font-bold text-[#f7f2ea] min-w-[16px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, selectedSize.name, quantity + 1)}
              className="text-[#f7f2ea]/60 hover:text-[#c89d66] p-0.5"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>

          <button
            onClick={() => removeItem(product.id)}
            className="text-xs text-[#f7f2ea]/40 hover:text-rose-400 p-1 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
