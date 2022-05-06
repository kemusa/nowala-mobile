import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Headline2Props } from './types';

const Headline2: React.FC<Headline2Props> = ({
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

export default Headline2;
