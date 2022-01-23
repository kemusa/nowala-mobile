import { TextStyle } from 'react-native';

export interface LinkTextProps {
  onPress: Function | (() => void);
  style?: TextStyle;
  numberOfLines?: number;
}
