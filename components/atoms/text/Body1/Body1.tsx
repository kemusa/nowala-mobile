import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Body1Props } from './types';

const Body1: React.FC<Body1Props> = ({ children, style, numberOfLines }) => {
  return (
    <Text style={[styles.text, { ...style }]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default Body1;
