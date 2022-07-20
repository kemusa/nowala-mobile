import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { WHITE } = colors;
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: WHITE,
    paddingTop: 20,
  },
  webview: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
