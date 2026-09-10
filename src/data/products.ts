export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  sizes: { name: string; price: number }[];
  featured?: boolean;
  seasonal?: boolean;
  calories: string;
}

export const products: Product[] = [
  // Hot Coffees
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with a caramel drizzle.',
    price: 5.25,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 4.75 },
      { name: 'Grande', price: 5.25 },
      { name: 'Venti', price: 5.75 },
    ],
    featured: true,
    calories: '250 cal',
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    description: 'Rich, full-bodied espresso combined with steamed milk and a light layer of foam. A perfect everyday classic.',
    price: 4.95,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 4.45 },
      { name: 'Grande', price: 4.95 },
      { name: 'Venti', price: 5.45 },
    ],
    calories: '190 cal',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Dark, rich espresso topped with a deep layer of foamed milk and a light dusting of cocoa.',
    price: 4.95,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 4.45 },
      { name: 'Grande', price: 4.95 },
      { name: 'Venti', price: 5.45 },
    ],
    featured: true,
    calories: '140 cal',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Smooth ristretto shots of espresso with whole milk, creating a velvety microfoam.',
    price: 5.25,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 4.75 },
      { name: 'Grande', price: 5.25 },
      { name: 'Venti', price: 5.75 },
    ],
    calories: '170 cal',
  },
  {
    id: 'americano',
    name: 'Caffè Americano',
    description: 'Espresso shots topped with hot water to produce a light layer of crema. Bold and robust.',
    price: 3.95,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 3.45 },
      { name: 'Grande', price: 3.95 },
      { name: 'Venti', price: 4.45 },
    ],
    calories: '15 cal',
  },
  {
    id: 'mocha',
    name: 'Caffè Mocha',
    description: 'Rich espresso combined with bittersweet mocha sauce and steamed milk, topped with whipped cream.',
    price: 5.45,
    category: 'hot-coffees',
    image: '☕',
    sizes: [
      { name: 'Tall', price: 4.95 },
      { name: 'Grande', price: 5.45 },
      { name: 'Venti', price: 5.95 },
    ],
    featured: true,
    calories: '360 cal',
  },

  // Cold Coffees
  {
    id: 'iced-latte',
    name: 'Iced Caffè Latte',
    description: 'Espresso combined with cold milk and served over ice. A smooth, refreshing classic.',
    price: 4.95,
    category: 'cold-coffees',
    image: '🧊',
    sizes: [
      { name: 'Tall', price: 4.45 },
      { name: 'Grande', price: 4.95 },
      { name: 'Venti', price: 5.45 },
    ],
    calories: '130 cal',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Slow-steeped for 20 hours, our cold brew is smooth, naturally sweet, and ultra-refreshing.',
    price: 4.75,
    category: 'cold-coffees',
    image: '🧊',
    sizes: [
      { name: 'Tall', price: 4.25 },
      { name: 'Grande', price: 4.75 },
      { name: 'Venti', price: 5.25 },
    ],
    featured: true,
    calories: '5 cal',
  },
  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cold Brew',
    description: 'Our signature cold brew infused with nitrogen for a naturally cascading, velvety smooth texture.',
    price: 5.45,
    category: 'cold-coffees',
    image: '🧊',
    sizes: [
      { name: 'Tall', price: 4.95 },
      { name: 'Grande', price: 5.45 },
    ],
    featured: true,
    seasonal: true,
    calories: '5 cal',
  },
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    description: 'Espresso shots topped with cold water and served over ice. Bold, refreshing, and invigorating.',
    price: 3.95,
    category: 'cold-coffees',
    image: '🧊',
    sizes: [
      { name: 'Tall', price: 3.45 },
      { name: 'Grande', price: 3.95 },
      { name: 'Venti', price: 4.45 },
    ],
    calories: '15 cal',
  },

  // Frappuccinos
  {
    id: 'caramel-frappuccino',
    name: 'Caramel Frappuccino',
    description: 'Caramel syrup blended with coffee, milk, and ice, topped with whipped cream and caramel drizzle.',
    price: 5.75,
    category: 'frappuccinos',
    image: '🥤',
    sizes: [
      { name: 'Tall', price: 5.25 },
      { name: 'Grande', price: 5.75 },
      { name: 'Venti', price: 6.25 },
    ],
    featured: true,
    calories: '380 cal',
  },
  {
    id: 'mocha-frappuccino',
    name: 'Mocha Frappuccino',
    description: 'Rich mocha sauce and coffee blended with milk and ice, finished with whipped cream.',
    price: 5.75,
    category: 'frappuccinos',
    image: '🥤',
    sizes: [
      { name: 'Tall', price: 5.25 },
      { name: 'Grande', price: 5.75 },
      { name: 'Venti', price: 6.25 },
    ],
    calories: '370 cal',
  },
  {
    id: 'java-chip-frappuccino',
    name: 'Java Chip Frappuccino',
    description: 'Rich mocha sauce and Frappuccino chips blended with coffee, milk, and ice. Pure indulgence.',
    price: 5.95,
    category: 'frappuccinos',
    image: '🥤',
    sizes: [
      { name: 'Tall', price: 5.45 },
      { name: 'Grande', price: 5.95 },
      { name: 'Venti', price: 6.45 },
    ],
    featured: true,
    calories: '440 cal',
  },
  {
    id: 'vanilla-bean-frappuccino',
    name: 'Vanilla Bean Crème',
    description: 'Vanilla bean powder blended with milk and ice, topped with whipped cream. Creamy and dreamy.',
    price: 5.45,
    category: 'frappuccinos',
    image: '🥤',
    sizes: [
      { name: 'Tall', price: 4.95 },
      { name: 'Grande', price: 5.45 },
      { name: 'Venti', price: 5.95 },
    ],
    calories: '380 cal',
  },

  // Teas
  {
    id: 'chai-tea-latte',
    name: 'Chai Tea Latte',
    description: 'Black tea infused with cinnamon, clove, and other warming spices combined with steamed milk.',
    price: 4.95,
    category: 'teas',
    image: '🍵',
    sizes: [
      { name: 'Tall', price: 4.45 },
      { name: 'Grande', price: 4.95 },
      { name: 'Venti', price: 5.45 },
    ],
    featured: true,
    calories: '240 cal',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Tea Latte',
    description: 'Smooth and creamy matcha sweetened and blended with steamed milk. A vibrant, earthy treat.',
    price: 5.25,
    category: 'teas',
    image: '🍵',
    sizes: [
      { name: 'Tall', price: 4.75 },
      { name: 'Grande', price: 5.25 },
      { name: 'Venti', price: 5.75 },
    ],
    seasonal: true,
    calories: '240 cal',
  },
  {
    id: 'london-fog',
    name: 'London Fog Latte',
    description: 'Earl Grey tea with lavender, vanilla syrup, and steamed milk. Sophisticated and soothing.',
    price: 4.95,
    category: 'teas',
    image: '🍵',
    sizes: [
      { name: 'Tall', price: 4.45 },
      { name: 'Grande', price: 4.95 },
      { name: 'Venti', price: 5.45 },
    ],
    calories: '180 cal',
  },

  // Bakery
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden-brown layers of buttery pastry, baked to perfection every morning.',
    price: 3.45,
    category: 'bakery',
    image: '🥐',
    sizes: [{ name: 'One Size', price: 3.45 }],
    calories: '260 cal',
  },
  {
    id: 'chocolate-muffin',
    name: 'Double Chocolate Muffin',
    description: 'Rich, moist chocolate muffin studded with chocolate chips. The ultimate chocolate lover\'s treat.',
    price: 3.75,
    category: 'bakery',
    image: '🧁',
    sizes: [{ name: 'One Size', price: 3.75 }],
    featured: true,
    calories: '410 cal',
  },
  {
    id: 'blueberry-scone',
    name: 'Blueberry Scone',
    description: 'Tender, buttery scone bursting with juicy blueberries and finished with a sugar glaze.',
    price: 3.45,
    category: 'bakery',
    image: '🫐',
    sizes: [{ name: 'One Size', price: 3.45 }],
    calories: '380 cal',
  },
  {
    id: 'banana-bread',
    name: 'Banana Walnut Bread',
    description: 'Moist banana bread loaded with crunchy walnuts. Perfect paired with your favorite coffee.',
    price: 3.95,
    category: 'bakery',
    image: '🍌',
    sizes: [{ name: 'One Size', price: 3.95 }],
    calories: '410 cal',
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getSeasonalProducts = () => products.filter((p) => p.seasonal);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
export const getProductById = (id: string) => products.find((p) => p.id === id);
