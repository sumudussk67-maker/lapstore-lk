// Hard-coded laptop catalogue (prices in LKR, realistic for Sri Lanka)
const img = (s) => `https://picsum.photos/seed/${s}/800/450`;
export const CATEGORIES = ['All', 'Gaming', 'Business', 'Student', 'Ultrabook'];
export const PRODUCTS = [
  { id: '1', title: 'ASUS TUF Gaming F15', category: 'Gaming', price: 'LKR 459,000', stock: 6, specs: 'Core i7, 16GB RAM, 512GB SSD, RTX 4060', image: img('tuf'), description: 'Strong gaming laptop with a 144Hz display and a durable build. Great for games and video editing.' },
  { id: '2', title: 'Lenovo LOQ 15', category: 'Gaming', price: 'LKR 389,000', stock: 9, specs: 'Ryzen 7, 16GB RAM, 512GB SSD, RTX 4050', image: img('loq'), description: 'Good value gaming laptop with a bright display and good cooling.' },
  { id: '3', title: 'Dell Latitude 5440', category: 'Business', price: 'LKR 325,000', stock: 12, specs: 'Core i5, 16GB RAM, 512GB SSD, 14" FHD', image: img('latitude'), description: 'Reliable business laptop with a fingerprint reader and a long battery life.' },
  { id: '4', title: 'HP ProBook 450 G10', category: 'Business', price: 'LKR 299,000', stock: 8, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('probook'), description: 'Solid everyday laptop for offices, with a full keyboard and number pad.' },
  { id: '5', title: 'Acer Aspire 3', category: 'Student', price: 'LKR 169,000', stock: 20, specs: 'Core i3, 8GB RAM, 256GB SSD, 15.6" HD', image: img('aspire'), description: 'Affordable laptop for classes, assignments and browsing.' },
  { id: '6', title: 'HP 15s', category: 'Student', price: 'LKR 189,000', stock: 15, specs: 'Ryzen 5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('hp15s'), description: 'Light and fast for university work, with a good screen for the price.' },
  { id: '7', title: 'MacBook Air M2', category: 'Ultrabook', price: 'LKR 519,000', stock: 5, specs: 'Apple M2, 8GB RAM, 256GB SSD, 13.6"', image: img('macair'), description: 'Thin, silent and fast, with all-day battery life.' },
  { id: '8', title: 'Dell XPS 13', category: 'Ultrabook', price: 'LKR 585,000', stock: 3, specs: 'Core Ultra 7, 16GB RAM, 512GB SSD, 13.4"', image: img('xps'), description: 'Premium compact laptop with a sharp display and metal body.' },
];
export const parsePrice = (p) => Number(p.replace(/[^0-9]/g, ''));
export const formatLKR = (n) => 'LKR ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const getBrand = (title) => (title.startsWith('MacBook') ? 'Apple' : title.split(' ')[0]);
export const BRANDS = ['All', ...new Set(PRODUCTS.map((p) => getBrand(p.title)))];