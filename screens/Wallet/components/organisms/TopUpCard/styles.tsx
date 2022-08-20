import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';

const { PRIMARY, WHITE } = colors;

const styles = StyleSheet.create({
  bottomBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    padding: 10,
  },
  bottomBarText: { color: WHITE, flexShrink: 1 },
  buttonContainer: { marginLeft: 10 },
  card: {
    width: '100%',
    height: 230,
    backgroundColor: '#E8F1FF',
    borderRadius: 8,
  },
  contentContainer: {
    width: '100%',
    padding: 12,
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: { flexShrink: 1 },
  image: { width: 150, height: 130 },
  title: { marginLeft: 5, marginBottom: 10 },
});

export default styles;
