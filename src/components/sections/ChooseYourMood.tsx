import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Leaf, HeartHandshake, IceCream, Plus, Check } from 'lucide-react';
import { products, type Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

type MoodType = 'energized' | 'calm' | 'sweet' | 'refreshed';

interface MoodOption {
  id: MoodType;
  label: string;
  sublabel: string;
  icon: typeof Zap;
  color: string;
}

const moodOptions: MoodOption[] = [
  { id: 'energized', label: 'ENERGIZED', sublabel: 'Bold espresso & high intensity roasts', icon: Zap, color: 'from-amber-500/20 to-orange-600/20 text-amber-400' },
  { id: 'calm', label: 'CALM & MINDFUL', sublabel: 'Botanical teas & smooth low-acid lattes', icon: Leaf, color: 'from-emerald-500/20 to-teal-600/20 text-emerald-400' },
  { id: 'sweet', label: 'SWEET INDULGENCE', sublabel: 'Caramel, Belgian chocolate & velvet microfoam', icon: HeartHandshake, color: 'from-rose-500/20 to-pink-600/20 text-rose-400' },
  { id: 'refreshed', label: 'REFRESHED', sublabel: 'Nitrogen cold brew & crisp iced botanicals', icon: IceCream, color: 'from-cyan-500/20 to-blue-600/20 text-cyan-400' },
];

export default function ChooseYourMood() {
  const [selectedMood, setSelectedMood] = useState<MoodType>('energized');
  const { addItem } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Filter products by selected mood tag
  const moodProducts = products.filter(
    (p) => p.moods && p.moods.includes(selectedMood)
  );

  const handleAddToCart = (product: Product) => {
    addItem(product, product.sizes[0]);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#0d0806] relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans"
          >
            PERSONALIZED MATCHING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-6xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
          >
            WHAT ARE YOU <br />
            <span className="font-normal italic text-gold-gradient">IN THE MOOD FOR?</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-[#f7f2ea]/65 font-light">
            Select your desired feeling and let us tailor your coffee ritual.
          </p>
        </div>

        {/* Mood Selector Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {moodOptions.map((mood) => {
            const isSelected = selectedMood === mood.id;
            const IconComp = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 relative border flex flex-col justify-between h-44 ${
                  isSelected
                    ? 'bg-[#1b120e] border-[#c89d66] shadow-glow scale-[1.02]'
                    : 'bg-[#140d0a]/60 border-[#e0cda8]/15 hover:border-[#c89d66]/40 hover:bg-[#1b120e]/60'
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${mood.color} flex items-center justify-center`}>
                  <IconComp size={20} />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-medium text-[#f7f2ea]">
                    {mood.label}
                  </h4>
                  <p className="text-[11px] text-[#f7f2ea]/50 font-light mt-0.5 line-clamp-2">
                    {mood.sublabel}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeMoodIndicator"
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#c89d66] shadow-glow"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommended Products */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {moodProducts.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-3xl glass-card border border-[#e0cda8]/15 p-5 flex flex-col justify-between space-y-4 hover:border-[#c89d66]/40 transition-all shadow-luxury group"
              >
                <div className="space-y-4">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#140d0a]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-card text-xs font-serif text-[#c89d66]">
                      ₹{product.price}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#f7f2ea] font-medium group-hover:text-[#c89d66] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#f7f2ea]/65 font-light line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 ${
                    addedProductId === product.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1b120e] border border-[#e0cda8]/20 text-[#f7f2ea] hover:bg-[#c89d66] hover:text-[#140d0a]'
                  }`}
                >
                  {addedProductId === product.id ? (
                    <>
                      <Check size={16} />
                      <span>MATCH ADDED</span>
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      <span>ORDER THIS RITUAL</span>
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
