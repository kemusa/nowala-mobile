import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { screenPadding } from '../../../../../../utils/consts/STYLES';

const { WHITE } = colors;
const cardMarginBottom = 25;
const cardHeight = 135;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 2 * screenPadding, // todo: make width dynamic
    height: cardHeight,
    backgroundColor: WHITE,
    borderRadius: 6,
    marginBottom: cardMarginBottom,
    padding: 12,
    justifyContent: 'center',
  },
  colorBar: {
    width: 5,
    height: 105,
    position: 'absolute',
  },
  colRight: { position: 'absolute', right: 5 },
  shadowViewStyles: { width: '100%', height: 135, marginBottom: 25 },
});

export default styles;
