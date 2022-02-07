import React from 'react';
import { Svg, Circle } from 'react-native-svg';

const CardDetailsIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width="20" height="5" viewBox="0 0 20 5" fill="none">
      <Circle cx={2.5} cy={2.5} r={2.5} fill="#ADABAB" />
      <Circle cx={17.5} cy={2.5} r={2.5} fill="#ADABAB" />
      <Circle cx={10} cy={2.5} r={2.5} fill="#ADABAB" />
    </Svg>
  );
};

export default CardDetailsIcon;
