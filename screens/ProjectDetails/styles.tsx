import { Dimensions, StyleSheet } from 'react-native';
import { spec } from '../Projects/specs';

const { ITEM_WIDTH, ITEM_HEIGHT, SPACING, RADIUS } = spec;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject },
  contentContainer: {
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  detailsText: { lineHeight: 24 },
  projectTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },
  sharedElement: { ...StyleSheet.absoluteFillObject },
  mainInfo: {
    width: width * 0.9,
    height: width * 0.8,
    marginTop: 50,
    overflow: 'scroll', // Helps enable border radius for BlurView component
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
    height: 140,
    width: 150,
    overflow: 'hidden', // Enables border radius for BlurView component
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 35,
    marginBottom: 35,
  },
  statTitle: { fontWeight: 'bold', marginBottom: 15, marginTop: 5 },
  statValue: { fontSize: 24, fontWeight: '200' },
  blur: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  text: { color: '#fff' },
});

export default styles;
