# LapStore LK

**Name:** G.G.SAMANTHA SUMUDU KUMARI GUNAWARDANA  
**Student ID:** MSC_CS_2025_023  
**Course:** COSC 64173 Mobile Computing, Assignment 01  
**Demo video:** YOUR VIDEO LINK

## 1. What is the app?
LapStore LK is a laptop selling app. Buyers can browse laptops with prices in LKR, filter them by brand (Dell, HP, ASUS, Lenovo, Acer, Apple and more), read detailed specifications, save favorites, add laptops to a cart, and place an order. It solves the problem of comparing and buying laptops from many different pages by putting everything in one place.

## 2. Screens (5)
| Screen | File | Purpose |
|---|---|---|
| Shop | `app/(tabs)/index.js` | Lists all laptops, brand filter, "Welcome back" banner |
| Favorites | `app/(tabs)/favorites.js` | Lists saved laptops |
| Cart | `app/(tabs)/cart.js` | Shows cart items, quantities, total, and places the order after a confirmation Modal |
| Settings | `app/(tabs)/settings.js` | Shows AppState status and notification test buttons |
| Laptop Details | `app/product/[id].js` | Brand, price, stock, specifications, add to cart, save to favorites, back navigation |

## 3. Core components and where they are used
- **View, Text, Pressable, Image:** `components/ProductCard.js`, `app/product/[id].js`, `app/(tabs)/cart.js`
- **FlatList:** Shop, Favorites and Cart screens, rendering `data/products.js`
- **Modal:** `components/FilterModal.js` (brand filter) and `app/(tabs)/cart.js` (order confirmation)
- **ScrollView:** `app/product/[id].js`

## 4. Expo Router structure
app/
_layout.js Root Stack + FavoritesProvider + notification permission
(tabs)/
_layout.js Tab navigator (Shop, Favorites, Cart, Settings) with a cart badge
index.js, favorites.js, cart.js, settings.js
product/
_layout.js Nested Stack with header and back button
[id].js Dynamic route, e.g. /product/3


## 5. State management
`context/FavoritesContext.js` stores `favorites` and `cart` with `useState` and shares them through React Context. Every screen reads and updates them, so a laptop added on the details screen appears in the Cart tab and updates the tab badge.

## 6. AppState
`hooks/useAppState.js` uses `AppState.addEventListener('change', ...)` to detect background/inactive to active. Shop shows a "Welcome back" banner, and Settings shows the time of the last return.

## 7. Local notifications: research and implementation
I read the expo-notifications documentation and learned that a notification handler is needed to show notifications while the app is open, permission must be requested, and Android needs a channel. `utils/notifications.js` uses `scheduleNotificationAsync` for an immediate notification (`trigger: null`) and a timed one (time interval trigger). Notifications are sent when a laptop is saved ("Added to favorites!", plus a price reminder after 30 seconds) and when an order is placed ("Order placed!"). Settings has buttons to test both types. In Expo Go on Android, setting up the notification channel is not supported, so I wrapped it in try/catch to keep the app running.

## 8. Run locally
```bash
git clone https://github.com/sumudussk67-maker/lapstore-lk.git
cd lapstore-lk
npm install --legacy-peer-deps
npx expo start
```
Scan the QR code with Expo Go on a phone connected to the same Wi-Fi.