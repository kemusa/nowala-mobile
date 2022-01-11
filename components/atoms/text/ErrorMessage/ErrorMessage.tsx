import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { ErrorMessageProps } from './types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  style,
  numberOfLines,
}) => {
  return (
    <Text style={[styles.text, { ...style }]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default ErrorMessage;
