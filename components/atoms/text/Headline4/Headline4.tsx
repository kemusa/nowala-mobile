import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline4Props } from './types';

const Headline4: React.FC<Headline4Props> = ({
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

export default Headline4;
