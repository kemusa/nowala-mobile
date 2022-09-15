import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';

const { PRIMARY, WHITE } = colors;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 230,
    backgroundColor: WHITE,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  contentContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
  },
  headingText: { marginTop: 15, marginBottom: 15 },
  image: { width: 28, height: 28, margin: 10 },
  title: { marginLeft: 5, marginBottom: 10 },
  waitlistText: { color: '#326493' },
});

export default styles;
