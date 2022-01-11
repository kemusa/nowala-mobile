import { StyleSheet } from 'react-native';
import { spec } from './specs';
import colors from '../../theme/colors';
import H3 from '../../components/atoms/text/Headline3/styles';
const { WHITE } = colors;
const { text } = H3;
const { ITEM_WIDTH, ITEM_HEIGHT, SPACING, RADIUS } = spec;
const styles = StyleSheet.create({
  blur: {
    width: '100%',
    height: ITEM_HEIGHT * 0.5,
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    padding: 15,
    width: '100%',
  },
  container: { flex: 1 },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    borderRadius: RADIUS,
  },
  itemContainer: { width: ITEM_WIDTH, height: ITEM_HEIGHT, margin: SPACING },
  image: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  title: {
    ...text,
    color: WHITE,
    width: ITEM_WIDTH * 0.8,
    fontFamily: 'Lato_700Bold',
    // textTransform: 'uppercase',
    // position: 'absolute',
    // top: SPACING,
    // left: SPACING,
  },
  daysContainer: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    height: 52,
    width: 52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysValue: { fontWeight: '800', color: WHITE, fontSize: 18 },
  daysLabel: { color: WHITE, fontSize: 10 },
  description: { fontSize: 14, color: WHITE, marginTop: 10 },
  infoContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(209, 209, 209, 0.6)',
    padding: 20,

    // flexDirection: 'column',
  },
  sharedElement: { ...StyleSheet.absoluteFillObject },
  text: { color: WHITE },
  topBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
