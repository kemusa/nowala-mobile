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
  container: {
    marginTop: 50,
    padding: screenPadding,
    alignItems: 'center',
    flex: 1,
  },
  safeAreaView: { flex: 1 },
  headings: { color: PRIMARY, textAlign: 'center' },
  image: {},
});

export default styles;
