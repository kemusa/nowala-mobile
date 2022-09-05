import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

const { NW_GREY_1 } = colors;

const styles = StyleSheet.create({
  contentContainer: { width: '100%', padding: 10 },
  startContainer: { width: '100%', alignItems: 'flex-start' },
  title: { marginBottom: 5 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  warning: { marginBottom: 10 },
  headerImage: {
    resizeMode: 'cover',
    height: 52,
    width: 52,
    marginRight: 10,
  },
  confirmImage: { height: 110, width: 110, marginTop: 80, marginBottom: 15 },
  // infoText: { marginBottom: 40 },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmedContainer: {
    width: '100%',
    alignItems: 'center',
  },
  pricingContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: NW_GREY_1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingDivider: {
    height: 45,
    width: 1,
    margin: 10,
    backgroundColor: NW_GREY_1,
  },
});

export default styles;
