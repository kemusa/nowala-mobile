import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';
const { PRIMARY } = colors;
const iconSize = 45;
const styles = StyleSheet.create({
  assetTitle: {
    // color: PRIMARY,
    lineHeight: 0,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: { flexDirection: 'row' },
  contentWrapper: {
    marginLeft: 15,
  },
  image: { height: iconSize, width: iconSize, borderRadius: 50 },
  locationWrapper: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 5 },
  peopleWrapper: { alignItems: 'flex-end' },
  topRow: { flexDirection: 'row' },
  topRowText: { lineHeight: 0, alignSelf: 'flex-end', marginBottom: 5 },
});

export default styles;
