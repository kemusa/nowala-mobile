import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { width, height } = Dimensions.get('window');
const { PRIMARY, WHITE, BACKGROUND } = colors;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: WHITE, padding: 20 },
  heading: { marginBottom: 12 },
  description: { marginBottom: 20 },
});

export default styles;
