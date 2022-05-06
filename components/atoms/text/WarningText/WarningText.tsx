import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { WarningTextProps } from './types';

const WarningText: React.FC<WarningTextProps> = ({
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

export default WarningText;
