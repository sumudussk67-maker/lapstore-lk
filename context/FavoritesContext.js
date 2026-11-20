import { createContext, useContext, useState } from 'react';
import { PRODUCTS, parsePrice, formatLKR } from '../data/products';
import { notifyNow, remindIn } from '../utils/notifications';

const Ctx = createContext();

// Global state: favorites + cart shared by every screen
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // [{ id, qty }]

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      return;
    }
    setFavorites([...favorites, id]);
    const ev = PRODUCTS.find((e) => e.id === id);
    notifyNow('Added to favorites!', `${ev.title} was saved to your favorites.`);
    remindIn(30, 'Price reminder', `Still interested in ${ev.title}? Only ${ev.price}.`);
  };

  const addToCart = (id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    const item = cart.find((c) => c.id === id);
    if (!item) setCart([...cart, { id, qty: 1 }]);
    else if (item.qty < p.stock) setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  };

  const changeQty = (id, delta) => {
    const p = PRODUCTS.find((x) => x.id === id);
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: Math.min(c.qty + delta, p.stock) } : c)).filter((c) => c.qty > 0));
  };

  const cartCount = cart.reduce((n, c) => n + c.qty, 0);
  const cartTotal = cart.reduce((sum, c) => sum + parsePrice(PRODUCTS.find((p) => p.id === c.id).price) * c.qty, 0);

  const placeOrder = () => {
    const no = 'LS' + Math.floor(1000 + Math.random() * 9000);
    notifyNow('Order placed!', `Order ${no} confirmed. Total ${formatLKR(cartTotal)}.`);
    setCart([]);
    return no;
  };

  return (
    <Ctx.Provider value={{ favorites, toggleFavorite, cart, addToCart, changeQty, cartCount, cartTotal, placeOrder }}>
      {children}
    </Ctx.Provider>
  );
}

export const useFavorites = () => useContext(Ctx);
