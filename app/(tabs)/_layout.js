import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../../context/FavoritesContext';
import { C } from '../../theme';

const icon = (name) => ({ color, size }) => <Ionicons name={name} size={size} color={color} />;

export default function TabsLayout() {
  const { cartCount } = useFavorites();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: C.teal, headerStyle: { backgroundColor: C.teal }, headerTintColor: C.white }}>
      <Tabs.Screen name="index" options={{ title: 'Shop', tabBarIcon: icon('laptop') }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites', tabBarIcon: icon('heart') }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart', tabBarIcon: icon('cart'), tabBarBadge: cartCount || undefined }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: icon('settings') }} />
    </Tabs>
  );
}
