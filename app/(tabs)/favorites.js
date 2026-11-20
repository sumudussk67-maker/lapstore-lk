import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { PRODUCTS } from '../../data/products';
import { useFavorites } from '../../context/FavoritesContext';
import ProductCard from '../../components/ProductCard';
import { C } from '../../theme';

export default function Favorites() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const saved = PRODUCTS.filter((e) => favorites.includes(e.id));

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlatList
        data={saved}
        keyExtractor={(e) => e.id}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Text style={s.empty}>No saved laptops yet. Tap the heart on Shop to save one.</Text>}
        renderItem={({ item }) => (
          <ProductCard event={item} isFav onToggle={() => toggleFavorite(item.id)} onPress={() => router.push(`/product/${item.id}`)} />
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({ empty: { textAlign: 'center', color: C.mute, marginTop: 60, paddingHorizontal: 30 } });
