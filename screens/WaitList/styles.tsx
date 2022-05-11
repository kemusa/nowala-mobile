import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { WHITE } = colors;
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', backgroundColor: WHITE },
  image: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    top: 0,
    zIndex: 10,
  },
  bodyText: { textAlign: 'center' },
  listItem: { flexDirection: 'row', marginTop: 20 },
  heading: { marginTop: 20 },
  heading2: { marginTop: 20, fontSize: 20, lineHeight: 34 },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height / 2,
    padding: 20,
    zIndex: 1,
  },
});

export default styles;
