import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';

const { PRIMARY, WHITE } = colors;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 230,
    backgroundColor: WHITE,
    borderRadius: 8,
  },
  contentContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
  },
  headingText: { marginBottom: 5 },
  image: { width: 68, height: 68, margin: 10, marginLeft: 50 },
  title: { marginLeft: 5, marginBottom: 10 },
  waitlistText: { color: '#326493' },
});

export default styles;
