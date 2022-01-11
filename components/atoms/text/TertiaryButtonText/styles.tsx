import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';

const { WHITE } = colors;
const styles = StyleSheet.create({
  container: { alignSelf: 'flex-end' },
  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.01,
    color: WHITE,
  },
});

export default styles;
