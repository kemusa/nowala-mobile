import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { TertiaryButtonTextProps } from './types';

const TertiaryButtonText: React.FC<TertiaryButtonTextProps> = ({
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

export default TertiaryButtonText;
