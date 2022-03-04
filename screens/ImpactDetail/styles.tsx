import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';
const { WHITE } = colors;
const styles = StyleSheet.create({
  container: { padding: screenPadding, paddingTop: 50 },
  safeAreaView: { flex: 1 },
  headings: { color: WHITE },
  impactExamplesHeading: { marginBottom: 10 },
  contextText: { marginBottom: 10 },
  exampleText: { marginBottom: 20 },
});

export default styles;
