import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import {
  buttonHeight,
  screenPadding,
  buttonContainer,
} from '../../utils/consts/STYLES';
const { WHITE, PRIMARY } = colors;
const styles = StyleSheet.create({
  buttonContainer,
  container: { padding: screenPadding, marginBottom: 150 },
  definitionContainer: { marginBottom: 40, marginTop: 30 },
  safeAreaView: { flex: 1 },
  headings: { color: PRIMARY, marginBottom: 7 },
  image: {
    height: 225,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  impactExamplesHeading: { marginBottom: 10 },
  contextText: { marginBottom: 10 },
  exampleText: { marginBottom: 20 },
});

export default styles;
