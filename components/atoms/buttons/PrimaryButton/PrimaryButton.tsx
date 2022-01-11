import React from 'react';
import { Button } from 'native-base';
import styles from './styles';
import NowalaText from '../../text';

const PrimaryRoundButton: React.FC<PrimaryRoundButtonProps> = ({
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
        bg: '#E8F3FE',
        _text: {
          color: '#596E8C',
        },
      }}>
      <NowalaText.ButtonText>{text}</NowalaText.ButtonText>
    </Button>
  );
};

export default PrimaryRoundButton;
