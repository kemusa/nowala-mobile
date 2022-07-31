import { StyleSheet } from 'react-native';
const iconSize = 45;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 25,
  },
  iconImage: { height: iconSize, width: iconSize, borderRadius: 50 },
  title: { marginLeft: 5, marginBottom: 5 },
});

export default styles;
