import React from 'react';
import { TouchableOpacity } from 'react-native';
import CardDetailsIcon from '../../atoms/icons/CardDetailsButton';
import styles from './styles';

const CardDetailsButton: React.FC<CardDetailsButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CardDetailsIcon />
    </TouchableOpacity>
  );
};

export default CardDetailsButton;
