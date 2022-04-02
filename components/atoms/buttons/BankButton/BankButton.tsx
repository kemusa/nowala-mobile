import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icons from '../../icons';
import NowalaText from '../../text';
import styles from './styles';

const BankButton: React.FC<BankButtonProps> = ({
  onPress,
  iconPath,
  bankName,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bankButtonContainer}>
        <Image
          style={styles.bankButtonImage}
          source={{
            uri: iconPath,
          }}
        />
        <NowalaText.ButtonText style={{ color: '#000' }}>
          {bankName}
        </NowalaText.ButtonText>
      </View>
    </TouchableOpacity>
  );
};

export default BankButton;
