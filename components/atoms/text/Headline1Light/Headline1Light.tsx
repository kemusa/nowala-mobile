import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline1LightProps } from './types';

const Headline1Light: React.FC<Headline1LightProps> = ({
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

export default Headline1Light;
