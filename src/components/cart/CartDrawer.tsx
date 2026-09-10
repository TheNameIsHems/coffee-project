import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';
import Button from '../ui/Button';

export default function CartDrawer() {
  const { state, closeCart, clearCart, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-coffee-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-coffee-600 to-coffee-700">
                  <ShoppingBag size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-coffee-900">Your Cart</h2>
                  <p className="text-xs text-coffee-400">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-coffee-50 text-coffee-500 hover:text-coffee-700 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 rounded-2xl bg-coffee-50 flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-coffee-300" />
                  </div>
                  <h3 className="font-display font-semibold text-coffee-800 mb-1">Your cart is empty</h3>
                  <p className="text-sm text-coffee-400">Add some delicious coffee to get started!</p>
                </div>
              ) : (
                <AnimatePresence>
                  <div className="space-y-1">
                    {state.items.map((item, index) => (
                      <CartItem
                        key={`${item.product.id}-${item.selectedSize.name}`}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-coffee-100 p-5 space-y-4 bg-cream-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-coffee-500 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-coffee-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-coffee-400">Tax (estimated)</span>
                  <span className="text-coffee-600">${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-coffee-200">
                  <span className="font-bold text-coffee-900">Total</span>
                  <span className="text-2xl font-bold text-coffee-800">
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center gap-2 w-full py-2 text-sm text-coffee-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
