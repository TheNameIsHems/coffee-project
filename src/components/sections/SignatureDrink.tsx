import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { getProductById } from '../../data/products';

const ingredients = [
  { name: 'Single-Origin Yirgacheffe', desc: 'Ethiopian washed arabica' },
  { name: 'Tahitian Vanilla Bean', desc: 'Hand-scraped pod extract' },
  { name: 'Creamy Oat Microfoam', desc: 'Steamed to velvety 65°C' },
  { name: 'Wild Blossom Honey', desc: 'Golden nectar drizzle' },
];

export default function SignatureDrink() {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Use Nitro Cold Brew or Caramel Macchiato as base product for cart
  const signatureProduct = getProductById('caramel-macchiato') || {
    id: 'aroma-latte',
    name: 'The Aroma Velvet Latte',
    description: 'Our crown jewel espresso creation infused with Tahitian vanilla bean, creamy oat microfoam, and golden blossom honey drizzle.',
    price: 390,
    category: 'hot-coffees',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1000',
    sizes: [{ name: 'Signature (12oz)', price: 390 }],
    calories: '220 cal',
  };

  const handleAddToCart = () => {
    addItem(signatureProduct, signatureProduct.sizes[0]);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#140d0a] relative overflow-hidden">
      {/* Background glow and subtle ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#c89d66]/15 via-[#3a281f]/30 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Signature Showcase Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#e0cda8]/20 shadow-luxury group bg-[#1b120e]">
              <img
                src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1000"
                alt="Café Aroma Signature Latte"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-card border border-[#e0cda8]/20 text-[#c89d66] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="animate-pulse" />
                <span>SIGNATURE CREATION</span>
              </div>

              {/* Bottom Price Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl glass-card border border-[#e0cda8]/20 flex items-center justify-between backdrop-blur-xl">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#c89d66] font-semibold">CRAFTED DAILY</p>
                  <p className="font-serif text-2xl font-semibold text-[#f7f2ea]">The Aroma Latte</p>
                </div>
                <span className="font-serif text-3xl font-bold text-[#c89d66]">₹390</span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Copy & Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans">
                THE HIGHLIGHT
              </span>

              <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]">
                MEET THE <br />
                <span className="font-normal italic text-gold-gradient">AROMA LATTE.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#f7f2ea]/75 font-light leading-relaxed">
                A harmonious alchemy of double ristretto Ethiopian coffee, hand-scraped Tahitian vanilla, micro-steamed milk foam, and organic wildflower honey. Silky, fragrant, and unforgettable.
              </p>
            </div>

            {/* Ingredients Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#c89d66] font-semibold font-sans">
                ARTISANAL INGREDIENTS
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredients.map((ing) => (
                  <div 
                    key={ing.name}
                    className="p-3.5 rounded-2xl glass-card border border-[#e0cda8]/10 flex items-start gap-3 hover:border-[#c89d66]/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#c89d66] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#f7f2ea]">{ing.name}</p>
                      <p className="text-[11px] text-[#f7f2ea]/50 font-light">{ing.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 shadow-glow ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c89d66] text-[#140d0a] hover:bg-[#f7f2ea]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>ADDED TO CART</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>ADD TO CART — ₹390</span>
                  </>
                )}
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1b120e] text-[#f7f2ea] border border-[#e0cda8]/20 text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#c89d66] hover:text-[#c89d66] transition-all text-center"
              >
                DISCOVER MORE
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
