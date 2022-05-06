import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const PlusIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={14} height={14} fill="none">
      <Path d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2Z" fill="#1BB55C" />
    </Svg>
  );
};

export default PlusIcon;
