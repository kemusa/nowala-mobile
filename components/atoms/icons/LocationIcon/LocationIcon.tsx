import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const LocationIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={10} height={10} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.75 4.159C.75 1.859 2.672 0 4.997 0 7.328 0 9.25 1.859 9.25 4.159c0 1.159-.421 2.235-1.115 3.147a11.032 11.032 0 0 1-2.77 2.57c-.244.16-.463.171-.73 0a10.82 10.82 0 0 1-2.77-2.57C1.171 6.394.75 5.318.75 4.159Zm2.847.13c0 .77.629 1.376 1.4 1.376.771 0 1.406-.606 1.406-1.377 0-.764-.635-1.4-1.406-1.4-.771 0-1.4.636-1.4 1.4Z"
        fill="#475972"
      />
    </Svg>
  );
};

export default LocationIcon;
