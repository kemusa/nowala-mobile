import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: WHITE },
  buttonContainer: { padding: screenPadding, width: '100%' },
  container: {
    padding: screenPadding,
    paddingTop: 40,
  },
  heading: { marginBottom: 12 },
});

export default styles;
