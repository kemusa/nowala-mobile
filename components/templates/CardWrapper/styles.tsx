import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

const { WHITE } = colors;
const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 6,
    padding: 10,
    marginBottom: 25,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 3.32,
    },
    shadowOpacity: 1.0,
    shadowRadius: 2,

    elevation: 3,
  },
});

export default styles;
