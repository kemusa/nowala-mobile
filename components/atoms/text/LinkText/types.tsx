import { TextStyle } from 'react-native';

export interface LinkTextProps {
  onPress: () => void;
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
}
