import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, Check, Eye } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, currentSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative rounded-3xl glass-card border border-[#e0cda8]/15 hover:border-[#c89d66]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-luxury"
    >
      <div>
        {/* Product Image Box */}
        <div 
          className="relative w-full aspect-[4/3] overflow-hidden bg-[#1b120e] cursor-pointer"
          onClick={() => onQuickView?.(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {product.featured && (
              <span className="px-2.5 py-1 rounded-full bg-[#c89d66] text-[#140d0a] text-[10px] font-bold tracking-widest uppercase shadow-md">
                FEATURED
              </span>
            )}
            {product.seasonal && (
              <span className="px-2.5 py-1 rounded-full bg-[#1b120e]/90 text-[#c89d66] border border-[#c89d66]/40 text-[10px] font-bold tracking-widest uppercase">
                SEASONAL
              </span>
            )}
          </div>

          {/* Rating Badge */}
          {product.rating && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-card border border-[#e0cda8]/20 flex items-center gap-1 text-[11px] font-bold text-[#f7f2ea] shadow-md z-10">
              <Star size={12} className="text-[#c89d66] fill-[#c89d66]" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}

          {/* Quick View Hover Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView?.(product);
              }}
              className="pointer-events-auto px-4 py-2 rounded-full glass-card border border-[#e0cda8]/30 text-[#f7f2ea] text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#c89d66] hover:text-[#140d0a] transition-all transform translate-y-2 group-hover:translate-y-0"
            >
              <Eye size={14} />
              <span>QUICK VIEW</span>
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 space-y-3">
          
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 
                onClick={() => onQuickView?.(product)}
                className="font-serif text-xl text-[#f7f2ea] font-medium group-hover:text-[#c89d66] transition-colors cursor-pointer leading-tight"
              >
                {product.name}
              </h3>
              <p className="text-[11px] text-[#c89d66]/80 font-sans tracking-wide mt-0.5">
                {product.calories} {product.origin ? `• ${product.origin.split('&')[0]}` : ''}
              </p>
            </div>
            
            <span className="font-serif text-xl font-bold text-[#c89d66] shrink-0">
              ₹{currentSize.price}
            </span>
          </div>

          <p className="text-xs text-[#f7f2ea]/65 font-light line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selector Pill buttons */}
          {product.sizes.length > 1 && (
            <div className="flex items-center gap-1.5 pt-1">
              {product.sizes.map((sz, idx) => (
                <button
                  key={sz.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSizeIndex(idx);
                  }}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-sans transition-all ${
                    selectedSizeIndex === idx
                      ? 'bg-[#c89d66] text-[#140d0a] font-bold'
                      : 'bg-[#1b120e] text-[#f7f2ea]/60 hover:text-[#f7f2ea] hover:bg-[#261a14]'
                  }`}
                >
                  {sz.name.split(' ')[0]}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#1b120e] border border-[#e0cda8]/20 text-[#f7f2ea] hover:bg-[#c89d66] hover:text-[#140d0a] hover:border-[#c89d66]'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={16} />
              <span>ADDED TO CART</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>ADD TO CART</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
