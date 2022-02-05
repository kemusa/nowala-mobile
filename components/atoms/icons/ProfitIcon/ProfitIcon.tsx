import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const ProfitIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg width={27} height={27} fill="none">
      <Path
        d="M24.785 15.358A11.978 11.978 0 0 0 11.59 1.112L11.467.096a12.999 12.999 0 0 1 14.321 15.462l-1.003-.2Z"
        fill="#FFBF00"
      />
      <Path
        d="m16.235 25.603-.25-.993a11.983 11.983 0 0 0 8.8-9.252l1.003.2a13.007 13.007 0 0 1-9.553 10.045ZM.042 12.981A12.998 12.998 0 0 1 11.467.096l.123 1.016a11.974 11.974 0 0 0-10.524 11.87H.042Z"
        fill="#475972"
      />
      <Path
        d="M4.357 22.673a13.02 13.02 0 0 1-4.315-9.692l1.024.002A11.977 11.977 0 0 0 15.985 24.61l.25.993a12.99 12.99 0 0 1-11.878-2.93Z"
        fill="#475972"
      />
    </Svg>
  );
};

export default ProfitIcon;
