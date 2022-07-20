import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';
const { BACKGROUND } = colors;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  scrollView: {
    backgroundColor: BACKGROUND,
    height: '100%',
    padding: 18,
    flex: 1,
  },
  spacer: { width: '100%', height: 100 },
  headingContainer: { backgroundColor: BACKGROUND, marginBottom: 20 },
});

export default styles;
