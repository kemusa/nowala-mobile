import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { buttonHeight } from '../../../../utils/consts/STYLES';

const { SUCCESS } = colors;

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'flex-start' },
  title: { marginBottom: 15 },
  warning: { marginBottom: 10 },
  infoText: { marginBottom: 40 },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  confirmedContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
