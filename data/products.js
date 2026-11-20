// Hard-coded laptop catalogue (prices in LKR, realistic for Sri Lanka)
const img = (s) => `https://picsum.photos/seed/${s}/800/450`;
export const CATEGORIES = ['All', 'Gaming', 'Business', 'Student', 'Ultrabook'];
export const PRODUCTS = [
  { id: '1', title: 'ASUS TUF Gaming F15', category: 'Gaming', price: 'LKR 459,000', stock: 6, specs: 'Core i7, 16GB RAM, 512GB SSD, RTX 4060', image: img('tuf'), description: 'Strong gaming laptop with a 144Hz display and a durable build.' },
  { id: '2', title: 'Lenovo LOQ 15', category: 'Gaming', price: 'LKR 389,000', stock: 9, specs: 'Ryzen 7, 16GB RAM, 512GB SSD, RTX 4050', image: img('loq'), description: 'Good value gaming laptop with a bright display and good cooling.' },
  { id: '3', title: 'Dell Latitude 5440', category: 'Business', price: 'LKR 325,000', stock: 12, specs: 'Core i5, 16GB RAM, 512GB SSD, 14" FHD', image: img('latitude'), description: 'Reliable business laptop with a fingerprint reader and long battery life.' },
  { id: '4', title: 'HP ProBook 450 G10', category: 'Business', price: 'LKR 299,000', stock: 8, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('probook'), description: 'Solid everyday office laptop with a full keyboard and number pad.' },
  { id: '5', title: 'Acer Aspire 3', category: 'Student', price: 'LKR 169,000', stock: 20, specs: 'Core i3, 8GB RAM, 256GB SSD, 15.6" HD', image: img('aspire'), description: 'Affordable laptop for classes, assignments and browsing.' },
  { id: '6', title: 'HP 15s', category: 'Student', price: 'LKR 189,000', stock: 15, specs: 'Ryzen 5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('hp15s'), description: 'Light and fast for university work, with a good screen for the price.' },
  { id: '7', title: 'MacBook Air M2', category: 'Ultrabook', price: 'LKR 519,000', stock: 5, specs: 'Apple M2, 8GB RAM, 256GB SSD, 13.6"', image: img('macair'), description: 'Thin, silent and fast, with all-day battery life.' },
  { id: '8', title: 'Dell XPS 13', category: 'Ultrabook', price: 'LKR 585,000', stock: 3, specs: 'Core Ultra 7, 16GB RAM, 512GB SSD, 13.4"', image: img('xps'), description: 'Premium compact laptop with a sharp display and metal body.' },
  { id: '9', title: 'MSI Katana 15', category: 'Gaming', price: 'LKR 479,000', stock: 4, specs: 'Core i7, 16GB RAM, 1TB SSD, RTX 4060', image: img('katana'), description: 'Fast gaming laptop with a 144Hz screen and a red-backlit keyboard.' },
  { id: '10', title: 'Lenovo ThinkPad E14', category: 'Business', price: 'LKR 345,000', stock: 7, specs: 'Core i5, 16GB RAM, 512GB SSD, 14" FHD', image: img('thinkpad'), description: 'Tough business laptop with the famous ThinkPad keyboard.' },
  { id: '11', title: 'ASUS Vivobook 15', category: 'Student', price: 'LKR 215,000', stock: 14, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('vivobook'), description: 'Slim, light laptop for studies and everyday use.' },
  { id: '12', title: 'HP Spectre x360', category: 'Ultrabook', price: 'LKR 540,000', stock: 3, specs: 'Core Ultra 7, 16GB RAM, 1TB SSD, 13.5" OLED', image: img('spectre'), description: 'Premium 2-in-1 that folds into a tablet, with an OLED touchscreen.' },
  { id: '13', title: 'Dell Inspiron 15', category: 'Student', price: 'LKR 235,000', stock: 10, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('inspiron'), description: 'Dependable laptop for study and work, with a good keyboard.' },
  { id: '14', title: 'Dell G15 Gaming', category: 'Gaming', price: 'LKR 419,000', stock: 5, specs: 'Core i7, 16GB RAM, 512GB SSD, RTX 3050', image: img('g15'), description: 'Strong cooling and a fast display for gaming and heavy apps.' },
  { id: '15', title: 'HP Victus 15', category: 'Gaming', price: 'LKR 365,000', stock: 7, specs: 'Ryzen 5, 16GB RAM, 512GB SSD, RTX 3050', image: img('victus'), description: 'Value gaming laptop with a 144Hz screen.' },
  { id: '16', title: 'Lenovo IdeaPad Slim 3', category: 'Student', price: 'LKR 199,000', stock: 16, specs: 'Ryzen 5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('ideapad'), description: 'Thin, light and affordable, ideal for university students.' },
  { id: '17', title: 'Acer Nitro V 15', category: 'Gaming', price: 'LKR 355,000', stock: 6, specs: 'Core i5, 16GB RAM, 512GB SSD, RTX 4050', image: img('nitro'), description: 'Gaming performance at a mid-range price.' },
  { id: '18', title: 'MacBook Pro 14', category: 'Ultrabook', price: 'LKR 745,000', stock: 2, specs: 'Apple M3 Pro, 18GB RAM, 512GB SSD, 14.2"', image: img('macpro'), description: 'Powerful laptop for creators, with an excellent display and battery.' },
  { id: '19', title: 'ASUS ROG Strix G16', category: 'Gaming', price: 'LKR 625,000', stock: 3, specs: 'Core i9, 32GB RAM, 1TB SSD, RTX 4070', image: img('rog'), description: 'High-end gaming laptop with RGB lighting and a 240Hz display.' },
  { id: '20', title: 'ASUS Zenbook 14', category: 'Ultrabook', price: 'LKR 395,000', stock: 8, specs: 'Core Ultra 5, 16GB RAM, 512GB SSD, 14" OLED', image: img('zenbook'), description: 'Light OLED ultrabook with strong battery life.' },
  { id: '21', title: 'Acer Swift Go 14', category: 'Ultrabook', price: 'LKR 335,000', stock: 9, specs: 'Core i5, 16GB RAM, 512GB SSD, 14" 2.8K', image: img('swift'), description: 'Slim and fast, with a sharp high-resolution screen.' },
  { id: '22', title: 'Lenovo Yoga Slim 7', category: 'Ultrabook', price: 'LKR 429,000', stock: 5, specs: 'Core Ultra 7, 16GB RAM, 1TB SSD, 14" OLED', image: img('yoga'), description: 'Premium thin laptop for work and entertainment.' },
  { id: '23', title: 'HP EliteBook 840 G10', category: 'Business', price: 'LKR 465,000', stock: 4, specs: 'Core i7, 16GB RAM, 512GB SSD, 14" FHD', image: img('elitebook'), description: 'Secure, durable business laptop with a webcam privacy shutter.' },
  { id: '24', title: 'Dell Vostro 3520', category: 'Business', price: 'LKR 259,000', stock: 11, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('vostro'), description: 'Affordable business laptop for small offices.' },
  { id: '25', title: 'Acer TravelMate P2', category: 'Business', price: 'LKR 249,000', stock: 10, specs: 'Core i5, 8GB RAM, 512GB SSD, 15.6" FHD', image: img('travelmate'), description: 'Sturdy, lightweight laptop for professionals on the move.' },
  { id: '26', title: 'Lenovo ThinkBook 15', category: 'Business', price: 'LKR 289,000', stock: 9, specs: 'Ryzen 5, 16GB RAM, 512GB SSD, 15.6" FHD', image: img('thinkbook'), description: 'Balanced business laptop with a good display and ports.' },
  { id: '27', title: 'ASUS ExpertBook B1', category: 'Business', price: 'LKR 279,000', stock: 8, specs: 'Core i5, 16GB RAM, 512GB SSD, 14" FHD', image: img('expertbook'), description: 'Durable office laptop with a military-grade build.' },
  { id: '28', title: 'HP 14 Laptop', category: 'Student', price: 'LKR 159,000', stock: 18, specs: 'Core i3, 8GB RAM, 256GB SSD, 14" HD', image: img('hp14'), description: 'Budget-friendly laptop that is easy to carry to class.' },
];

export const parsePrice = (p) => Number(p.replace(/[^0-9]/g, ''));
export const formatLKR = (n) => 'LKR ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const getBrand = (title) => (title.startsWith('MacBook') ? 'Apple' : title.split(' ')[0]);
export const BRANDS = ['All', ...new Set(PRODUCTS.map((p) => getBrand(p.title)))];