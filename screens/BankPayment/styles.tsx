import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import {
  screenPadding,
  doubleButtonContainer,
} from '../../utils/consts/STYLES';

const { WHITE, TRETIARY, TRANSPARENT_BACKGROUND } = colors;
const styles = StyleSheet.create({
  bankDetail: { flexDirection: 'row', alignItems: 'center' },
  buttonContainer: {
    // height: 170,
    alignItems: 'center',
    backgroundColor: TRANSPARENT_BACKGROUND,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  safeAreaView: { flex: 1, backgroundColor: WHITE },
  container: { padding: screenPadding, paddingTop: 40 },
  heading: { marginBottom: 12 },
  instructions: { marginBottom: 30 },
  instructionItem: { marginBottom: 20 },
  doubleButtonContainer,
  instructionHeading: { color: TRETIARY },
  spacer: { height: 30, width: '100%' },
});

export default styles;
