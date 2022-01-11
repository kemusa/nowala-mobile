import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline1Props } from './types';

const Headline1: React.FC<Headline1Props> = ({
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

export default Headline1;
