import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icons from '../../icons';
import styles from './styles';

const MinusButton: React.FC<PlusButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}>
      <Icons.PlusIcon />
    </TouchableOpacity>
  );
};

export default MinusButton;
