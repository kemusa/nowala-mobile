import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

const MinusButton: React.FC<MinusButtonProps> = ({ disabled, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}>
      <View style={styles.minus}></View>
    </TouchableOpacity>
  );
};

export default MinusButton;
