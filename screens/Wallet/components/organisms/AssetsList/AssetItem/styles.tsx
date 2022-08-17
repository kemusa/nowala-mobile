import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
const { PRIMARY } = colors;

const styles = StyleSheet.create({
  assetTitle: {
    color: PRIMARY,
    lineHeight: 0,
    alignSelf: 'flex-end',
  },
  bottomRow: { width: '100%', flexDirection: 'row', marginTop: 9 },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contentWrapper: {
    marginLeft: 10,
  },
  dueDateText: { marginLeft: 15 },
  topRow: { flexDirection: 'row', marginBottom: 7 },
  topRowText: { lineHeight: 0, alignSelf: 'flex-end', marginBottom: 5 },
  unitsText: { marginLeft: 7 },
});

export default styles;
