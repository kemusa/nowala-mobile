import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
const { ERROR_RED } = colors;
const styles = StyleSheet.create({
  container: { alignSelf: 'flex-end' },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: ERROR_RED,
  },
});

export default styles;
