import { Platform, StyleSheet } from 'react-native';
import { spec } from './specs';
import colors from '../../theme/colors';
import {
  buttonHeight,
  screenPadding,
  buttonContainer,
} from '../../utils/consts/STYLES';
const { WHITE, PRIMARY, BACKGROUND, TRANSPARENT_BACKGROUND } = colors;
const { ITEM_WIDTH, ITEM_HEIGHT } = spec;

const styles = StyleSheet.create({
  buttonContainer: {
    // padding: 15,
    width: '100%',
    backgroundColor: WHITE,
    height: buttonHeight,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 85,
  },
  container: { flex: 1, backgroundColor: BACKGROUND, padding: 20 },
  cardContainer: {
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    borderRadius: 6,
  },
  itemContainer: {
    width: '100%',
    height: ITEM_HEIGHT,
    padding: 10,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 3.32,
    },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 3,
  },
  image: { height: ITEM_HEIGHT * 0.6, resizeMode: 'cover' },
  title: {
    textAlign: 'center',
    color: PRIMARY,
    width: ITEM_WIDTH * 0.8,
  },
  description: { fontSize: 14, marginTop: 10, textAlign: 'center' },
  cardInfoContainer: {
    width: '100%',
    backgroundColor: WHITE,
    padding: 20,
    height: ITEM_HEIGHT * 0.4,
    alignItems: 'center',
  },
  text: { color: WHITE },
  topBar: {
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spacer: { height: 150 },
});

export default styles;
