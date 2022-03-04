import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  container: { padding: screenPadding, paddingTop: 40, backgroundColor: WHITE },
  heading: { marginBottom: 12 },
  description: { marginBottom: 20 },
  textInput: { height: 40, width: 320 },
});

export default styles;
