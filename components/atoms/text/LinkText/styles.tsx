import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
const { LINK_TEXT } = colors;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // lineHeight: 30,
    letterSpacing: 0.01,
    fontFamily: 'Lato_400Regular',
    color: LINK_TEXT,
  },
});

export default styles;
