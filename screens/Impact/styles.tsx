import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
const { BACKGROUND } = colors;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  scrollView: {
    backgroundColor: BACKGROUND,
    height: '100%',
    padding: 18,
    flex: 1,
  },
  spacerBottom: { width: '100%', height: 100 },
  spacerCards: { width: '100%', height: 30 },
  headingContainer: { backgroundColor: BACKGROUND, marginBottom: 20 },
});

export default styles;
