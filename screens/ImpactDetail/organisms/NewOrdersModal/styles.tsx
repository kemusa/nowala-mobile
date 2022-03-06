import { StyleSheet } from 'react-native';
import { buttonHeight } from '../../../../utils/consts/STYLES';

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'flex-start', padding: 20 },
  title: { marginBottom: 15 },
  warning: { marginBottom: 10 },
  infoText: { marginBottom: 40 },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
});

export default styles;
