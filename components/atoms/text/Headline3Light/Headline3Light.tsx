import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline3LightProps } from './types';

const Headline3Light: React.FC<Headline3LightProps> = ({
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

export default Headline3Light;
