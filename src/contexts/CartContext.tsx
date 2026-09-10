import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: { name: string; price: number };
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: { name: string; price: number } } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; sizeName: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size: { name: string; price: number }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, sizeName: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getInitialState(): CartState {
  try {
    const stored = localStorage.getItem('cafe-aroma-cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      return { items: parsed.items || [], isOpen: false };
    }
  } catch {
    // ignore parse errors
  }
  return { items: [], isOpen: false };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.selectedSize.name === action.payload.size.name
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + 1,
        };
        return { ...state, items: newItems, isOpen: true };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { product: action.payload.product, quantity: 1, selectedSize: action.payload.size },
        ],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(item.product.id === action.payload.productId &&
                item.selectedSize.name === action.payload.sizeName)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId &&
          item.selectedSize.name === action.payload.sizeName
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

  useEffect(() => {
    localStorage.setItem('cafe-aroma-cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );

  const value: CartContextType = {
    state,
    addItem: (product, size) => dispatch({ type: 'ADD_ITEM', payload: { product, size } }),
    removeItem: (productId) => dispatch({ type: 'REMOVE_ITEM', payload: productId }),
    updateQuantity: (productId, sizeName, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, sizeName, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
