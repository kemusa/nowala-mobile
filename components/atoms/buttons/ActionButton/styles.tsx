import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { buttonHeight } from '../../../../utils/consts/STYLES';
const { WHITE, PRIMARY } = colors;
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: buttonHeight,
    backgroundColor: WHITE,
    minWidth: 75,
  },
  text: {
    color: PRIMARY,
  },
});

export default styles;
