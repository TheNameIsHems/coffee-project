export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
}

export const categories: Category[] = [
  {
    id: 'all',
    name: 'ALL',
    icon: '✨',
    description: 'Explore our complete menu of handcrafted coffee & delicacies',
  },
  {
    id: 'hot-coffees',
    name: 'ESPRESSO',
    icon: '☕',
    description: 'Classic single-origin espresso drinks crafted to perfection',
  },
  {
    id: 'cold-coffees',
    name: 'COLD BREW',
    icon: '🧊',
    description: '24-hour slow steeped cold brews and velvety nitrogen pours',
  },
  {
    id: 'frappuccinos',
    name: 'BLENDED',
    icon: '🥤',
    description: 'Frozen blended specialty treats crowned with fresh cream',
  },
  {
    id: 'teas',
    name: 'TEA & BOTANICALS',
    icon: '🍵',
    description: 'Kyoto matcha, spices, and floral tea infusions',
  },
  {
    id: 'bakery',
    name: 'DESSERTS & BAKERY',
    icon: '🥐',
    description: 'French butter pastries and chocolate bake house specialties',
  },
];

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
