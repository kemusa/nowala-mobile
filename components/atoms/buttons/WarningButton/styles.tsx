import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { buttonHeight } from '../../../../utils/consts/STYLES';
const { PRIMARY, WHITE, ERROR_RED } = colors;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: buttonHeight,
    width: '100%',
    marginTop: 20,
    backgroundColor: WHITE,
    borderColor: ERROR_RED,
    borderWidth: 1,
  },
  text: { color: ERROR_RED },
});

export default styles;
