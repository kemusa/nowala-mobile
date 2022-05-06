import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { BigDataTextProps } from './types';

const BigDataText: React.FC<BigDataTextProps> = ({
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

export default BigDataText;
