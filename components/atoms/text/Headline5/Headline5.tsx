import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline5Props } from './types';

const Headline5: React.FC<Headline5Props> = ({
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

export default Headline5;
