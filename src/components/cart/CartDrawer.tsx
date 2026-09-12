import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';

export default function CartDrawer() {
  const { state, closeCart, totalItems, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      setIsOrdered(false);
      closeCart();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d0806]/80 backdrop-blur-md"
            onClick={closeCart}
          />

          {/* Slide-in Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#140d0a] border-l border-[#e0cda8]/15 shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#e0cda8]/15">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c89d66] flex items-center justify-center text-[#140d0a]">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#f7f2ea]">Your Ritual Cart</h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#c89d66]">
                    {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} SELECTED
                  </p>
                </div>
              </div>

              <button
                onClick={closeCart}
                className="p-2 rounded-full text-[#f7f2ea]/60 hover:text-[#c89d66] hover:bg-[#1b120e] transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Success Animation Overlay */}
            {isOrdered ? (
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40"
                >
                  <CheckCircle2 size={36} />
                </motion.div>
                <h4 className="font-serif text-3xl text-[#f7f2ea]">Order Placed!</h4>
                <p className="text-xs text-[#f7f2ea]/70 font-light max-w-xs leading-relaxed">
                  Your coffee ritual is being freshly prepared by our master barista. Thank you for choosing Café Aroma.
                </p>
              </div>
            ) : (
              <>
                {/* Cart Items Scroll List */}
                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                  {state.items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                      <div className="w-16 h-16 rounded-full bg-[#1b120e] border border-[#e0cda8]/15 flex items-center justify-center text-[#c89d66]">
                        <Sparkles size={24} />
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl text-[#f7f2ea]">Your Cart is Empty</h4>
                        <p className="text-xs text-[#f7f2ea]/50 font-light max-w-xs mt-1">
                          Explore our signature single-origin coffees, velvety teas, and fresh croissants.
                        </p>
                      </div>
                      <button
                        onClick={closeCart}
                        className="px-6 py-2.5 rounded-full bg-[#c89d66] text-[#140d0a] text-xs font-bold uppercase tracking-widest"
                      >
                        BROWSE MENU
                      </button>
                    </div>
                  ) : (
                    state.items.map((item) => (
                      <CartItem
                        key={`${item.product.id}-${item.selectedSize.name}`}
                        item={item}
                      />
                    ))
                  )}
                </div>

                {/* Footer Subtotal & Checkout */}
                {state.items.length > 0 && (
                  <div className="p-6 border-t border-[#e0cda8]/15 bg-[#1b120e] space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-[#f7f2ea]/60">
                        <span>Subtotal</span>
                        <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#f7f2ea]/60">
                        <span>Tax & Artisan Crafting Fee</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="flex justify-between text-base font-serif text-[#f7f2ea] font-bold pt-2 border-t border-[#e0cda8]/10">
                        <span>Total Amount</span>
                        <span className="text-[#c89d66]">₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 rounded-2xl bg-[#c89d66] text-[#140d0a] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#f7f2ea] hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 shadow-luxury"
                    >
                      <span>PROCEED TO CHECKOUT</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
