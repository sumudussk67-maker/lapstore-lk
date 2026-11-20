import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { BRANDS } from '../data/products';
import { C } from '../theme';

export default function FilterModal({ visible, selected, onSelect, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={s.backdrop}>
        <View style={s.sheet}>
          <Text style={s.heading}>Filter by brand</Text>
          {BRANDS.map((cat) => (
            <Pressable key={cat} style={[s.row, selected === cat && s.active]} onPress={() => { onSelect(cat); onClose(); }}>
              <Text style={[s.rowText, selected === cat && { color: C.white }]}>{cat}</Text>
            </Pressable>
          ))}
          <Pressable onPress={onClose}><Text style={s.close}>Close</Text></Pressable>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: { backgroundColor: C.white, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  heading: { fontSize: 20, fontWeight: '700', color: C.ink, marginBottom: 12 },
  row: { padding: 14, borderRadius: 10, marginBottom: 6, backgroundColor: C.bg },
  active: { backgroundColor: C.teal },
  rowText: { fontSize: 16, color: C.ink },
  close: { textAlign: 'center', color: C.mute, padding: 12, marginTop: 4 },
});
