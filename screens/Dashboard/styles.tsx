import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';
const { BACKGROUND } = colors;
const styles = StyleSheet.create({
  headingContainer: { backgroundColor: BACKGROUND, padding: screenPadding },
  // heading: { marginBottom: 10 },
});

export default styles;
