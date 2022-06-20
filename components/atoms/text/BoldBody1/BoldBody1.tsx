import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { BoldBody1Props } from './types';

const BoldBody1: React.FC<BoldBody1Props> = ({
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

export default BoldBody1;
