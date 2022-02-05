import React from 'react';
import { TouchableOpacity } from 'react-native';
import MoreDetailIcon from '../../atoms/icons/MoreDetailIcon';

const MoreCardDetails: React.FC<MoreDetailProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MoreDetailIcon />
    </TouchableOpacity>
  );
};

export default MoreCardDetails;
