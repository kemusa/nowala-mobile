import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import NowalaText from '../../atoms/text';
import styles from './styles';

const CardCtaButton: React.FC<CardCtaButtonProps> = ({
  onPress,
  text,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        {icon && icon}
        {icon && <View style={{ width: 10 }}></View>}
        <NowalaText.Body1 style={styles.textConfig}>{text}</NowalaText.Body1>
      </View>
    </TouchableOpacity>
  );
};

export default CardCtaButton;
