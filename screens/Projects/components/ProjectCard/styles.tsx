import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { spec } from '../../specs';
const { WHITE, PRIMARY } = colors;
const { ITEM_WIDTH, ITEM_HEIGHT } = spec;

const styles = StyleSheet.create({
  cardInfoContainer: {
    width: '100%',
    backgroundColor: WHITE,
    padding: 20,
    height: ITEM_HEIGHT * 0.4,
    alignItems: 'center',
  },
  container: {
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    borderRadius: 6,
  },
  description: { fontSize: 14, marginTop: 10, textAlign: 'center' },
  image: { height: ITEM_HEIGHT * 0.6, resizeMode: 'cover' },
  text: { color: WHITE },
  textWrapper: { color: WHITE, marginBottom: 15 },
  title: {
    textAlign: 'center',
    color: PRIMARY,
    // width: ITEM_WIDTH * 0.8,
  },
});

export default styles;
