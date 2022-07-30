import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
const { NW_GREY_3 } = colors;

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-end' },
  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#5E8497',
  },
});

export default styles;
