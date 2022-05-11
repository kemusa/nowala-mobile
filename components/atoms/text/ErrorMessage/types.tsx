import { TextStyle } from 'react-native';

export interface ErrorMessageProps {
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
}
