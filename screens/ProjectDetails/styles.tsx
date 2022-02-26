import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { width, height } = Dimensions.get('window');
const { PRIMARY, WHITE } = colors;

const styles = StyleSheet.create({
  backgroundContainer: { height: '100%', width: '100%', position: 'absolute' },
  container: { flex: 1, flexDirection: 'column' },
  contentContainer: {
    height: '55%',
    // flex: 1,
    // paddingTop: ,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    height: '45%',
    resizeMode: 'cover',
  },
  // test: { height: '100%', backgroundColor: 'blue' },
  detailsText: { lineHeight: 24, color: PRIMARY },
  projectTitle: {
    fontSize: 24,
    fontWeight: '800',
    position: 'absolute',
    bottom: 10,
    padding: 20,
    color: WHITE,
  },
  mainInfo: {
    padding: 15,
    borderRadius: 6,
  },
  scrollView: {
    alignItems: 'center',
  },
  statsInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statContainer: {
    height: 100,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    // backgroundColor: 'pink',
    // flexBasis: 'calc(100% - 50px)',
  },
  statTitle: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 'auto',
    color: PRIMARY,
  },
  statRow1: { flexDirection: 'row', alignItems: 'center' },
  statValue: { fontSize: 20, fontWeight: '200', color: PRIMARY, marginTop: 5 },
  titleContaier: {
    height: '45%',
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
});

export default styles;