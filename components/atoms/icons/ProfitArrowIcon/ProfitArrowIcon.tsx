import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ProfitArrowIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={7} height={9} fill="none">
      <Path
        d="M2.571 1.323c.336-.838 1.522-.838 1.858 0l2.42 6.056A1 1 0 0 1 5.92 8.75H1.08a1 1 0 0 1-.93-1.371l2.421-6.056Z"
        fill="#65B947"
      />
    </Svg>
  );
};

export default ProfitArrowIcon;
