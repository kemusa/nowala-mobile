import React from 'react';
import { Button } from 'native-base';
import styles from './styles';
import NowalaText from '../../text';
import { View } from 'react-native';

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  disabled,
  loading,
  onPress,
}) => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
      <Button
        style={styles.button}
        disabled={disabled}
        isLoading={loading}
        // colorScheme="tertiary"
        onPress={onPress}
        _loading={{
          bg: '#2C4953',
          _text: {
            color: '#E4F6FD',
          },
        }}>
        <NowalaText.TertiaryButtonText style={styles.text}>
          {text}
        </NowalaText.TertiaryButtonText>
      </Button>
    </View>
  );
};

export default ActionButton;
