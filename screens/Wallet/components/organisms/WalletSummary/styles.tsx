import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';
const { PROFIT_GREEN } = colors;

const styles = StyleSheet.create({
  breakdownContainer: { backgroundColor: '#fff', borderRadius: 6, padding: 20 },
  container: {},
  col1: { width: '50%' },
  col2: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  returnDetailContainer: { marginBottom: 20 },
  row1: { alignItems: 'flex-end' },
  title: { marginLeft: 5, marginBottom: 5 },
  totalWalletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  totalMoneyValue: { marginRight: 4 },
  profitPercentText: { color: PROFIT_GREEN, marginLeft: 3 },
  zeroProfitPercentText: { marginLeft: 3 },
});

export default styles;
