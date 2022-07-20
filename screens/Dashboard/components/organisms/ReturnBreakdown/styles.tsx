import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  breakdownContainer: { backgroundColor: '#fff', borderRadius: 6, padding: 20 },
  container: {},
  col1: { width: '50%' },
  col2: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  returnDetailContainer: { marginBottom: 20 },
  row1: { alignItems: 'flex-end' },
  title: { marginLeft: 5, marginBottom: 5 },
});

export default styles;
