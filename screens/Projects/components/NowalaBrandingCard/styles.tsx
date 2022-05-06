import { Platform, StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { spec } from '../../specs';
const { WHITE } = colors;
const { ITEM_HEIGHT } = spec;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#20678A',
    borderRadius: 6,
  },
  topTextWrapper: { color: WHITE, marginTop: 15, marginBottom: 15 },
  textWrapper: { color: WHITE, marginBottom: 15 },
});

export default styles;
