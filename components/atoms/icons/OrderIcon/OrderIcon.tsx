import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const OrderIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={33} height={33} fill="none">
      <Path
        d="M27.5 30.25h-22a1.375 1.375 0 0 1-1.375-1.375V4.125A1.375 1.375 0 0 1 5.5 2.75h22a1.375 1.375 0 0 1 1.375 1.375v24.75A1.375 1.375 0 0 1 27.5 30.25Zm-1.375-2.75v-22H6.875v22h19.25ZM11 12.375h11v2.75H11v-2.75Zm0 5.5h11v2.75H11v-2.75Z"
        fill="gray"
      />
    </Svg>
  );
};

export default OrderIcon;
