import React from 'react';
import { Button } from 'native-base';
import styles from './styles';
import NowalaText from '../../text';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  disabled,
  loading,
  onPress,
}) => {
  return (
    <Button
      style={styles.button}
      disabled={disabled}
      isLoading={loading}
      onPress={onPress}
      _loading={{
        bg: '#548392',
        _text: {
          color: '#fff',
        },
      }}>
      <NowalaText.ButtonText>{text}</NowalaText.ButtonText>
    </Button>
  );
};

export default PrimaryButton;
