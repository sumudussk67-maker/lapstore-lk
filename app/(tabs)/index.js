import { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { PRODUCTS, getBrand } from '../../data/products';
import { useFavorites } from '../../context/FavoritesContext';
import useAppState from '../../hooks/useAppState';
import ProductCard from '../../components/ProductCard';
import FilterModal from '../../components/FilterModal';
import { C } from '../../theme';

export default function Explore() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const [category, setCategory] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const [welcome, setWelcome] = useState(false);

  // AppState: show a banner when the app returns to the foreground
  useAppState(() => {
    setWelcome(true);
    setTimeout(() => setWelcome(false), 4000);
  });

  const data = category === 'All' ? PRODUCTS : PRODUCTS.filter((e) => getBrand(e.title) === category);

  return (
    <View style={s.screen}>
      {welcome && <View style={s.banner}><Text style={s.bannerText}>Welcome back! Prices and stock are up to date.</Text></View>}
      <View style={s.bar}>
        <Text style={s.count}>{data.length} laptops · {category}</Text>
        <Pressable style={s.btn} onPress={() => setShowFilter(true)}><Text style={s.btnText}>Filter</Text></Pressable>
      </View>
      <FlatList
        data={data}
        keyExtractor={(e) => e.id}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Text style={s.empty}>No laptops in this category yet.</Text>}
        renderItem={({ item }) => (
          <ProductCard event={item} isFav={favorites.includes(item.id)} onToggle={() => toggleFavorite(item.id)} onPress={() => router.push(`/product/${item.id}`)} />
        )}
      />
      <FilterModal visible={showFilter} selected={category} onSelect={setCategory} onClose={() => setShowFilter(false)} />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  banner: { backgroundColor: C.turmeric, padding: 10 },
  bannerText: { textAlign: 'center', fontWeight: '600', color: C.ink },
  bar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12 },
  count: { color: C.mute, fontSize: 15 },
  btn: { backgroundColor: C.teal, paddingVertical: 8, paddingHorizontal: 18, borderRadius: 20 },
  btnText: { color: C.white, fontWeight: '600' },
  empty: { textAlign: 'center', color: C.mute, marginTop: 40 },
});
