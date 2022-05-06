import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { screenPadding } from '../../../../../../utils/consts/STYLES';

const { WHITE } = colors;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 2 * screenPadding, // todo: make width dynamic
    height: 135,
    backgroundColor: WHITE,
    borderRadius: 6,
    marginBottom: 25,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 3.32,
    },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 3,
    padding: 12,
    justifyContent: 'center',
  },
  colorBar: {
    width: 5,
    height: 105,
    position: 'absolute',
  },
  colRight: { position: 'absolute', right: 5 },
});

export default styles;
