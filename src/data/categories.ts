export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'hot-coffees',
    name: 'Hot Coffees',
    icon: '☕',
    description: 'Classic espresso drinks crafted to warm your soul',
    color: 'from-amber-600 to-orange-700',
  },
  {
    id: 'cold-coffees',
    name: 'Cold Coffees',
    icon: '🧊',
    description: 'Refreshing iced beverages for any season',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'frappuccinos',
    name: 'Frappuccinos',
    icon: '🥤',
    description: 'Blended frozen treats to satisfy your cravings',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'teas',
    name: 'Teas',
    icon: '🍵',
    description: 'Soothing teas and tea lattes for mindful moments',
    color: 'from-emerald-500 to-green-600',
  },
  {
    id: 'bakery',
    name: 'Bakery',
    icon: '🥐',
    description: 'Freshly baked pastries and breads, made daily',
    color: 'from-yellow-500 to-amber-600',
  },
];

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
