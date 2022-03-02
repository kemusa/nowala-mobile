import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ChevronRight: React.FC<IconProps> = () => {
  return (
    <Svg width={11} height={17} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m.519 14.17 1.854 1.878 8.053-7.947L2.48.048.6 1.903l6.093 6.174-6.174 6.092Z"
        fill="#ADABAB"
      />
    </Svg>
  );
};

export default ChevronRight;
