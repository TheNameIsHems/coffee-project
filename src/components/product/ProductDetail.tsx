import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Star, ShoppingBag, Check, Flame, Globe } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addItem } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAddToCart = () => {
    addItem(product, currentSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#0d0806]/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        className="relative w-full max-w-3xl bg-[#1b120e] border border-[#e0cda8]/20 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#140d0a]/70 text-[#f7f2ea]/70 hover:text-[#c89d66] hover:bg-[#140d0a] transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Product Image */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto bg-[#140d0a]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b120e] via-transparent to-transparent md:bg-gradient-to-r" />
          
          {product.origin && (
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card text-xs text-[#f7f2ea]/80 flex items-center gap-2">
              <Globe size={14} className="text-[#c89d66] shrink-0" />
              <span className="truncate">{product.origin}</span>
            </div>
          )}
        </div>

        {/* Right Details Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#c89d66]/20 text-[#c89d66] text-[10px] uppercase font-bold tracking-widest">
                  {product.category}
                </span>
                {product.rating && (
                  <span className="flex items-center gap-1 text-xs text-[#f7f2ea]/70 font-semibold">
                    <Star size={13} className="text-[#c89d66] fill-[#c89d66]" />
                    <span>{product.rating}</span>
                    <span className="text-[#f7f2ea]/40">({product.ratingCount || 100})</span>
                  </span>
                )}
              </div>

              <h2 className="font-serif text-3xl text-[#f7f2ea] font-medium mt-2">
                {product.name}
              </h2>
              <p className="text-2xl font-serif text-[#c89d66] font-bold mt-1">
                ₹{currentSize.price}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#f7f2ea]/75 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Notes */}
            {product.flavorNotes && (
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#c89d66] font-semibold">
                  FLAVOR PROFILE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.flavorNotes.map((fn) => (
                    <span
                      key={fn}
                      className="px-2.5 py-1 rounded-full bg-[#261a14] border border-[#e0cda8]/15 text-[10px] text-[#f7f2ea]/80"
                    >
                      {fn}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#f7f2ea]/60 font-semibold">
                SELECT SIZE
              </span>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((sz, idx) => (
                  <button
                    key={sz.name}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all text-center ${
                      selectedSizeIndex === idx
                        ? 'bg-[#c89d66] text-[#140d0a] font-bold shadow-glow'
                        : 'bg-[#261a14] text-[#f7f2ea]/70 hover:text-[#f7f2ea] border border-[#e0cda8]/10'
                    }`}
                  >
                    <div>{sz.name}</div>
                    <div className="text-[10px] opacity-80">₹{sz.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nutrition info badge */}
            <div className="flex items-center gap-2 text-xs text-[#f7f2ea]/50 pt-1">
              <Flame size={14} className="text-[#c89d66]" />
              <span>{product.calories}</span>
            </div>

          </div>

          {/* Add to Cart Footer Action */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 shadow-luxury ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#c89d66] text-[#140d0a] hover:bg-[#f7f2ea] hover:shadow-glow'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={18} />
                <span>ADDED TO CART</span>
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>ADD TO CART — ₹{currentSize.price}</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
