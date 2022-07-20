import React from 'react';
import {
  Svg,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const ProfitCardIcon: React.FC<IconProps> = () => {
  return (
    <Svg width={35} height={35} fill="none">
      <Circle cx={17.5} cy={17.5} r={17.5} fill="#CEFFBD" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.337 11.145a3.521 3.521 0 0 0 4.163 3.458v6.976c0 2.935-1.731 4.671-4.67 4.671h-6.402c-2.947 0-4.678-1.736-4.678-4.671v-6.392c0-2.935 1.731-4.687 4.678-4.687H21.4a3.345 3.345 0 0 0-.062.645Zm-1.83 8.89 2.5-3.227v-.016a.66.66 0 0 0-.123-.914.64.64 0 0 0-.908.13l-2.108 2.713-2.401-1.89a.647.647 0 0 0-.916.123l-2.585 3.334a.63.63 0 0 0-.138.4.645.645 0 0 0 1.192.376l2.162-2.797 2.4 1.883a.648.648 0 0 0 .924-.115Z"
        fill="url(#a)"
      />
      <Circle opacity={0.4} cx={25.063} cy={10.938} r={2.188} fill="url(#b)" />
      <Defs>
        <LinearGradient
          id="a"
          x1={17.625}
          y1={10.5}
          x2={17.625}
          y2={26.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#69E83D" />
          <Stop offset={1} stopColor="#3CC70C" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={25.063}
          y1={8.75}
          x2={25.063}
          y2={13.125}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#69E83D" />
          <Stop offset={1} stopColor="#3CC70C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ProfitCardIcon;
