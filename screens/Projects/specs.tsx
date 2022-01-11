import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SIZE = 64;
const ICON_SIZE = SIZE * 0.6;
const SPACING = 12;
const s = width * 0.68;

export const spec = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.8,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
  ICON_SIZE,
};
