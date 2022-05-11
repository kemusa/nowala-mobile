import { Platform, StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { spec } from '../../specs';
const { WHITE } = colors;
const { ITEM_HEIGHT } = spec;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ITEM_HEIGHT,
    // backgroundColor: '#20678A',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: 6,
    // marginBottom: 20,
  },
  textWrapper: { color: WHITE, marginBottom: 5 },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 6,
    resizeMode: 'stretch',
  },
});

export default styles;
