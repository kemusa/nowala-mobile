import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Subtitle1Props } from './types';

const Subtitle2: React.FC<Subtitle1Props> = ({
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
