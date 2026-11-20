import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme';

export default function ProductCard({ event, isFav, onToggle, onPress }) {
  return (
    <Pressable style={s.card} onPress={onPress}>
      <Image source={{ uri: event.image }} style={s.img} />
      <View style={s.body}>
        <View style={{ flex: 1 }}>
          <Text style={s.title}>{event.title}</Text>
          <Text style={s.meta}>{event.specs}</Text>
          <Text style={s.price}>{event.price}</Text>
        </View>
        <Pressable onPress={onToggle} hitSlop={10}>
          <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={26} color={C.heart} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: C.white, borderRadius: 14, marginBottom: 16, overflow: 'hidden', elevation: 2 },
  img: { height: 150, width: '100%', backgroundColor: '#cfdcdc' },
  body: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  title: { fontSize: 17, fontWeight: '700', color: C.ink },
  meta: { color: C.mute, marginTop: 3 },
  price: { color: C.teal, fontWeight: '600', marginTop: 4 },
});
