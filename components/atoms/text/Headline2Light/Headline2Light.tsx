import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline2LightProps } from './types';

const Headline2Light: React.FC<Headline2LightProps> = ({
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

export default Headline2Light;
