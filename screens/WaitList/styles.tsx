import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { screenPadding } from '../../utils/consts/STYLES';

const { WHITE } = colors;
const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  container: { flex: 1, flexDirection: 'column', backgroundColor: WHITE },
  // backgroundContainer: {
  //   flex: 1,
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  // },
  image: {
    height: 225,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  bodyText: { textAlign: 'center' },
});

export default styles;
