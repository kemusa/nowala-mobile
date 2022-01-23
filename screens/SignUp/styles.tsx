import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: WHITE },
  container: { padding: 20 },
  heading: { marginBottom: 12 },
  description: { marginBottom: 20 },
  textInput: { height: 40, width: 320 },
});

export default styles;
