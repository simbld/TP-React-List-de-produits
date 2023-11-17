const PRODUCTS = [
  // Fruits
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple',
    origin: 'Asia',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Dragonfruit',
    origin: 'Southeast Asia',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Passionfruit',
    origin: 'South America',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: true,
    name: 'Mango',
    origin: 'South Asia',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Banana',
    origin: 'Southeast Asia',
  },
  {
    category: 'Fruits',
    price: '$4',
    stocked: true,
    name: 'Pineapple',
    origin: 'South America',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: false,
    name: 'Orange',
    origin: 'China',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Strawberry',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: false,
    name: 'Cherry',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: true,
    name: 'Grape',
    origin: 'Middle East',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Kiwi',
    origin: 'China',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: true,
    name: 'Peach',
    origin: 'China',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: false,
    name: 'Plum',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Pear',
    origin: 'China',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: false,
    name: 'Watermelon',
    origin: 'Africa',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: true,
    name: 'Blueberry',
    origin: 'North America',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Raspberry',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: true,
    name: 'Blackberry',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$4',
    stocked: false,
    name: 'Pomegranate',
    origin: 'Iran',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: true,
    name: 'Lemon',
    origin: 'Asia',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: false,
    name: 'Lime',
    origin: 'Southeast Asia',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: true,
    name: 'Fig',
    origin: 'Asia',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: false,
    name: 'Papaya',
    origin: 'Central America',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Cantaloupe',
    origin: 'Africa',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Avocado',
    origin: 'North America',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: true,
    name: 'Guava',
    origin: 'South America',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: false,
    name: 'Lychee',
    origin: 'Asia',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: true,
    name: 'Tangerine',
    origin: 'Europe',
  },
  {
    category: 'Fruits',
    price: '$3',
    stocked: false,
    name: 'Persimmon',
    origin: 'Asia',
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Coconut',
    origin: 'Oceania',
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Date',
    origin: 'Middle East',
  },
  // Vegetables
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Spinach',
    origin: 'Central and Western Asia',
  },
  {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Pumpkin',
    origin: 'North America',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Peas',
    origin: 'Mediterranean',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: false,
    name: 'Carrot',
    origin: 'Persia',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Broccoli',
    origin: 'Europe',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: false,
    name: 'Cauliflower',
    origin: 'Asia',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Tomato',
    origin: 'South America',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: false,
    name: 'Cucumber',
    origin: 'India',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Bell Pepper',
    origin: 'Central and South America',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: false,
    name: 'Eggplant',
    origin: 'Southeast Asia',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: true,
    name: 'Lettuce',
    origin: 'Egypt',
  },
  {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Sweet Potato',
    origin: 'Central America',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: true,
    name: 'Onion',
    origin: 'Central Asia',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: false,
    name: 'Garlic',
    origin: 'Central Asia',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Green Bean',
    origin: 'Central and South America',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: false,
    name: 'Zucchini',
    origin: 'Central and Eastern Europe',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: true,
    name: 'Corn',
    origin: 'Mexico',
  },
  {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Mushroom',
    origin: 'Global',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: true,
    name: 'Asparagus',
    origin: 'Europe, Western Asia',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: false,
    name: 'Celery',
    origin: 'Mediterranean',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Radish',
    origin: 'Europe',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: false,
    name: 'Beetroot',
    origin: 'North America',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Artichoke',
    origin: 'Mediterranean',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: false,
    name: 'Leek',
    origin: 'Europe',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: true,
    name: 'Fennel',
    origin: 'Mediterranean',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: false,
    name: 'Chili Pepper',
    origin: 'South America',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Okra',
    origin: 'Africa',
  },
  {
    category: 'Vegetables',
    price: '$3',
    stocked: false,
    name: 'Bok Choy',
    origin: 'Asia',
  },
  {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Parsnip',
    origin: 'Europe',
  },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: false,
    name: 'Rutabaga',
    origin: 'North America',
  },
];

export default PRODUCTS;
