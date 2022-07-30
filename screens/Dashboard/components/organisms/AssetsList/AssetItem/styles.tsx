import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
const { PRIMARY } = colors;

const styles = StyleSheet.create({
  assetTitle: {
    color: PRIMARY,
    lineHeight: 0,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentWrapper: {
    marginLeft: 10,
  },
  topRow: { flexDirection: 'row' },
  topRowText: { lineHeight: 0, alignSelf: 'flex-end', marginBottom: 5 },
  unitsText: { marginLeft: 7 },
});

export default styles;
