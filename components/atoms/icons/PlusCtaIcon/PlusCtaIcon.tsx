import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const PlusCtaIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={12} height={12} fill="none">
      <Path
        d="M12 6.857H6.857V12H5.143V6.857H0V5.143h5.143V0h1.714v5.143H12v1.714Z"
        fill="#0057FF"
      />
    </Svg>
  );
};

export default PlusCtaIcon;
