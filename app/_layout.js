import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/FavoritesContext';
import { setupNotifications } from '../utils/notifications';

export default function RootLayout() {
  useEffect(() => { setupNotifications(); }, []);
  return (
    <FavoritesProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FavoritesProvider>
  );
}
