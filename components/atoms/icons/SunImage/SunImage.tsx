import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const SunImage: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={width || 223} height={112} fill="none">
      <Path
        d="M223 111.5a111.507 111.507 0 0 0-32.658-78.842A111.49 111.49 0 0 0 111.5 0 111.5 111.5 0 0 0 0 111.5h223Z"
        fill="#FFC51A"
      />
      <Path
        d="M208 111.5a96.493 96.493 0 0 0-28.264-68.236A96.501 96.501 0 0 0 15 111.5h193Z"
        fill="#FFD24B"
      />
      <Path d="M183 111.5a71.5 71.5 0 1 0-143 0h143Z" fill="#FFDF7D" />
    </Svg>
  );
};

export default SunImage;
