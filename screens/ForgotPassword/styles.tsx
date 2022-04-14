import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: WHITE },
  container: { padding: screenPadding, paddingTop: 40, backgroundColor: WHITE },
  heading: { marginBottom: 12 },
  description: { marginBottom: 20 },
  textInput: { height: 40, width: 320 },
  confirmImage: { height: 110, width: 110, marginTop: 80, marginBottom: 15 },
  confirmContainer: { width: '100%', alignItems: 'center' },
  title: { marginBottom: 15 },
});

export default styles;
