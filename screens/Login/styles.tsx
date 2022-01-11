import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { ...StyleSheet.absoluteFillObject },
  container: { flex: 1, padding: 20, paddingTop: 40, backgroundColor: WHITE },
  heading: { marginBottom: 12 },
  description: { marginBottom: 20 },
  textInput: { height: 40, width: 320 },
});

export default styles;
