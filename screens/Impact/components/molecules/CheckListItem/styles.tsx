import { StyleSheet } from 'react-native';
// import colors from '../../theme/colors';
// const { WHITE } = colors;
const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 25, alignItems: 'center' },
  taskConfirm: {
    backgroundColor: '#D8E7FB',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { marginLeft: 20 },
});

export default styles;
