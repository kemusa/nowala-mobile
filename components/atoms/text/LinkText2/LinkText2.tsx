import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinkTextProps } from './types';

const LinkText: React.FC<LinkTextProps> = ({
  children,
  style,
  numberOfLines,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={[styles.text, { ...style }]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkText;
