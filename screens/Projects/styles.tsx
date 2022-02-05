import { StyleSheet } from 'react-native';
import { spec } from './specs';
import colors from '../../theme/colors';
import H3 from '../../components/atoms/text/Headline3/styles';
const { WHITE } = colors;
const { text } = H3;
const { ITEM_WIDTH, ITEM_HEIGHT, SPACING, RADIUS } = spec;
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    width: '100%',
  },
  container: { flex: 1 },
  cardContainer: {
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    borderRadius: RADIUS,
  },
  itemContainer: { width: ITEM_WIDTH, height: ITEM_HEIGHT, margin: SPACING },
  image: { height: ITEM_HEIGHT * 0.5, resizeMode: 'cover' },
  title: {
    ...text,
    color: WHITE,
    width: ITEM_WIDTH * 0.8,
    fontFamily: 'Lato_700Bold',
  },
  description: { fontSize: 14, color: WHITE, marginTop: 10 },
  cardInfoContainer: {
    width: '100%',
    backgroundColor: '#5E8497',
    padding: 20,
    height: ITEM_HEIGHT * 0.5,
    // position: 'absolute',
    // bottom: 0,
  },
  text: { color: WHITE },
  topBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
