import React from 'react';
import {
  Svg,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const WalletCardIcon: React.FC<IconProps> = () => {
  return (
    <Svg width={35} height={35} fill="none">
      <Circle cx={17.5} cy={17.5} r={17.5} fill="#D0F7FF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.247 14.328h-3.705c-1.725.003-3.122 1.365-3.125 3.046-.002 1.685 1.396 3.053 3.125 3.055h3.708v.268c0 2.94-1.782 4.678-4.797 4.678h-7.905c-3.016 0-4.798-1.739-4.798-4.678v-6.402c0-2.94 1.782-4.67 4.798-4.67h7.902c3.015 0 4.797 1.73 4.797 4.67v.033Zm-13.35-.007h4.944a.661.661 0 0 0 .667-.656.662.662 0 0 0-.673-.65h-4.938a.662.662 0 0 0-.667.65.661.661 0 0 0 .667.656Z"
        fill="url(#a)"
      />
      <Path
        opacity={0.4}
        d="M21.032 17.76a1.765 1.765 0 0 0 1.745 1.402h2.844a.635.635 0 0 0 .628-.642v-2.215a.637.637 0 0 0-.628-.643h-2.91c-.948.003-1.713.79-1.712 1.76 0 .113.011.226.033.337"
        fill="url(#b)"
      />
      <Circle cx={22.75} cy={17.412} r={0.875} fill="url(#c)" />
      <Defs>
        <LinearGradient
          id="a"
          x1={17.5}
          y1={9.625}
          x2={17.5}
          y2={25.375}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#85E9FF" />
          <Stop offset={1} stopColor="#40B8D2" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={23.624}
          y1={15.662}
          x2={23.624}
          y2={19.162}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#85E9FF" />
          <Stop offset={1} stopColor="#40B8D2" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={22.75}
          y1={16.537}
          x2={22.75}
          y2={18.287}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#85E9FF" />
          <Stop offset={1} stopColor="#40B8D2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default WalletCardIcon;
