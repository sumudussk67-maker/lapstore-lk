import { useState } from 'react';
import { View, Text, FlatList, Pressable, Modal, Image, StyleSheet } from 'react-native';
import { PRODUCTS, parsePrice, formatLKR } from '../../data/products';
import { useFavorites } from '../../context/FavoritesContext';
import { C } from '../../theme';

export default function Cart() {
  const { cart, changeQty, cartTotal, placeOrder } = useFavorites();
  const [confirm, setConfirm] = useState(false);
  const [orderNo, setOrderNo] = useState(null);
  const items = cart.map((c) => ({ ...PRODUCTS.find((p) => p.id === c.id), qty: c.qty }));

  const order = () => {
    setOrderNo(placeOrder());
    setConfirm(false);
  };

  return (
    <View style={s.screen}>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          orderNo ? (
            <View style={s.done}>
              <Text style={s.doneTitle}>Order {orderNo} placed!</Text>
              <Text style={s.empty}>Thank you. Your laptop will be delivered in 2-3 days.</Text>
            </View>
          ) : (
            <Text style={s.empty}>Your cart is empty. Add a laptop from the Shop tab.</Text>
          )
        }
        renderItem={({ item }) => (
          <View style={s.row}>
            <Image source={{ uri: item.image }} style={s.img} />
            <View style={{ flex: 1 }}>
              <Text style={s.title}>{item.title}</Text>
              <Text style={s.price}>{formatLKR(parsePrice(item.price) * item.qty)}</Text>
              <View style={s.qtyRow}>
                <Pressable style={s.qBtn} onPress={() => changeQty(item.id, -1)}><Text style={s.qText}>-</Text></Pressable>
                <Text style={s.qty}>{item.qty}</Text>
                <Pressable style={s.qBtn} onPress={() => changeQty(item.id, 1)}><Text style={s.qText}>+</Text></Pressable>
              </View>
            </View>
          </View>
        )}
      />
      {items.length > 0 && (
        <View style={s.footer}>
          <Text style={s.total}>Total: {formatLKR(cartTotal)}</Text>
          <Pressable style={s.order} onPress={() => setConfirm(true)}>
            <Text style={s.orderText}>Place order</Text>
          </Pressable>
        </View>
      )}
      <Modal visible={confirm} transparent animationType="fade" onRequestClose={() => setConfirm(false)}>
        <View style={s.backdrop}>
          <View style={s.box}>
            <Text style={s.title}>Confirm your order?</Text>
            <Text style={s.empty}>Total: {formatLKR(cartTotal)}</Text>
            <Pressable style={s.order} onPress={order}><Text style={s.orderText}>Yes, order now</Text></Pressable>
            <Pressable onPress={() => setConfirm(false)}><Text style={s.cancel}>Cancel</Text></Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  row: { flexDirection: 'row', backgroundColor: C.white, borderRadius: 12, padding: 10, marginBottom: 12, elevation: 2 },
  img: { width: 90, height: 90, borderRadius: 8, marginRight: 12, backgroundColor: '#cfdcdc' },
  title: { fontSize: 16, fontWeight: '700', color: C.ink },
  price: { color: C.teal, fontWeight: '600', marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qBtn: { backgroundColor: C.teal, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  qText: { color: C.white, fontSize: 18, fontWeight: '700' },
  qty: { marginHorizontal: 14, fontSize: 16, fontWeight: '600' },
  footer: { padding: 16, backgroundColor: C.white },
  total: { fontSize: 18, fontWeight: '800', color: C.ink, marginBottom: 10 },
  order: { backgroundColor: C.teal, padding: 14, borderRadius: 10, marginTop: 8 },
  orderText: { color: C.white, textAlign: 'center', fontWeight: '700' },
  empty: { textAlign: 'center', color: C.mute, marginTop: 20, paddingHorizontal: 20 },
  done: { alignItems: 'center', marginTop: 60 },
  doneTitle: { fontSize: 22, fontWeight: '800', color: C.teal },
  backdrop: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: 'rgba(0,0,0,0.5)' },
  box: { backgroundColor: C.white, borderRadius: 14, padding: 20 },
  cancel: { textAlign: 'center', color: C.mute, padding: 12 },
});
