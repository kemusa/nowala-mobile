import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { ButtonTextProps } from './types';

const ButtonText: React.FC<ButtonTextProps> = ({
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

export default ButtonText;
