import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';

const { WHITE } = colors;
const styles = StyleSheet.create({
  container: { alignSelf: 'flex-end' },
  text: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: WHITE,
  },
});

export default styles;
