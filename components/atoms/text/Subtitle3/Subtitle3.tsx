import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Subtitle2Props } from './types';

const Subtitle2: React.FC<Subtitle2Props> = ({
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

export default Subtitle2;
