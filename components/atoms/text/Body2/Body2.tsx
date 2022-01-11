import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Body2Props } from './types';

const Body2: React.FC<Body2Props> = ({ children, style, numberOfLines }) => {
  return (
    <Text style={[styles.text, { ...style }]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default Body2;
