import { View, Text, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { PRODUCTS, getBrand } from '../../data/products';
import { useFavorites } from '../../context/FavoritesContext';
import { C } from '../../theme';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { favorites, toggleFavorite, addToCart, cart } = useFavorites();
  const ev = PRODUCTS.find((e) => e.id === id);
  if (!ev) return <Text style={{ padding: 20 }}>Laptop not found.</Text>;
  const isFav = favorites.includes(ev.id);
  const inCart = cart.find((c) => c.id === ev.id)?.qty || 0;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }}>
      <Image source={{ uri: ev.image }} style={s.img} />
      <View style={s.body}>
        <Text style={s.title}>{ev.title}</Text>
        <Text style={s.price}>{ev.price}</Text>
        <Text style={s.line}>Brand: {getBrand(ev.title)}</Text>
        <Text style={s.line}>Category: {ev.category}</Text>
        <Text style={s.line}>In stock: {ev.stock}</Text>
        <Text style={s.head}>Specifications</Text>
        {ev.specs.split(', ').map((sp) => (
          <Text key={sp} style={s.spec}>• {sp}</Text>
        ))}
        <Text style={s.desc}>{ev.description}</Text>
        <Pressable style={s.btn} onPress={() => addToCart(ev.id)}>
          <Text style={s.btnText}>{inCart ? `Add another (in cart: ${inCart})` : 'Add to cart'}</Text>
        </Pressable>
        {inCart > 0 && (
          <Pressable style={[s.btn, { backgroundColor: C.turmeric }]} onPress={() => router.push('/cart')}>
            <Text style={[s.btnText, { color: C.ink }]}>Go to cart</Text>
          </Pressable>
        )}
        <Pressable style={[s.btn, { backgroundColor: isFav ? C.heart : C.mute }]} onPress={() => toggleFavorite(ev.id)}>
          <Text style={s.btnText}>{isFav ? 'Remove from favorites' : 'Save to favorites'}</Text>
        </Pressable>
        <Pressable onPress={() => router.back()}><Text style={s.back}>Back to laptops</Text></Pressable>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  img: { height: 230, width: '100%', backgroundColor: '#cfdcdc' },
  body: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: C.ink },
  price: { fontSize: 20, color: C.teal, fontWeight: '700', marginVertical: 6 },
  line: { color: C.ink, fontSize: 16, marginTop: 2 },
  head: { fontSize: 18, fontWeight: '700', color: C.ink, marginTop: 16, marginBottom: 4 },
  spec: { color: C.ink, fontSize: 16, marginTop: 2 },
  desc: { color: C.mute, fontSize: 16, lineHeight: 24, marginTop: 14 },
  btn: { backgroundColor: C.teal, padding: 14, borderRadius: 10, marginTop: 12 },
  btnText: { color: C.white, textAlign: 'center', fontWeight: '700' },
  back: { textAlign: 'center', color: C.mute, padding: 14 },
});
