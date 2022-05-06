import { Platform, StyleSheet, StatusBar } from 'react-native';
import { spec } from './specs';
import colors from '../../theme/colors';
import { buttonHeight } from '../../utils/consts/STYLES';
const { WHITE, PRIMARY, BACKGROUND, TRANSPARENT_BACKGROUND } = colors;
const { ITEM_WIDTH, ITEM_HEIGHT } = spec;

const styles = StyleSheet.create({
  buttonContainer: {
    // padding: 15,
    width: '100%',
    backgroundColor: TRANSPARENT_BACKGROUND,
    height: buttonHeight,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 85,
  },
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {},
  itemContainer: {
    width: '100%',
    height: ITEM_HEIGHT,
    padding: 10,
    marginBottom: 10,
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
