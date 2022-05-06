import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';
const { BACKGROUND } = colors;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  headingContainer: { backgroundColor: BACKGROUND, marginBottom: 20 },
});

export default styles;
