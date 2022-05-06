import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useClipboard } from 'native-base';
import { Tooltip } from 'native-base';
import colors from '../../../../theme/colors';

const CopyButton: React.FC<CopyButtonProps> = ({ copyText }) => {
  const { onCopy } = useClipboard();
  const [isOpen, setIsOpen] = useState(false);
  const { NW_GREY_1 } = colors;

  const onPress = () => {
    onCopy(copyText);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <Tooltip label="Copied to clipboard" isOpen={isOpen}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          style={styles.icon}
          name="copy-outline"
          size={20}
          color={NW_GREY_1}
        />
      </TouchableOpacity>
    </Tooltip>
  );
};

export default CopyButton;
