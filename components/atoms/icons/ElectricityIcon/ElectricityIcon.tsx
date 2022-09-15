import React from 'react';
import { Svg, Path, Circle, G, Defs, ClipPath } from 'react-native-svg';

const ElectricityIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg width={20} height={20} fill="none">
      <Circle opacity={0.5} cx={10} cy={10} r={10} fill="#FFC875" />
      <G clipPath="url(#a)">
        <Path
          d="M8.184 14.65c0 .146.042.291.12.414l.39.602a.724.724 0 0 0 .605.334H10.7c.243 0 .471-.126.606-.334l.388-.602a.778.778 0 0 0 .123-.415v-.899H8.182l.002.9ZM6 8.124c0 1.04.374 1.99.99 2.713.375.442.963 1.365 1.187 2.145 0 .005 0 .011.002.017h3.642l.002-.018c.224-.779.812-1.702 1.187-2.144A4.17 4.17 0 0 0 14 8.125C14 5.843 12.202 3.993 9.988 4 7.668 4.008 6 5.946 6 8.125Zm4-1.875c-1.003 0-1.818.84-1.818 1.875a.37.37 0 0 1-.364.375.37.37 0 0 1-.364-.375C7.454 6.678 8.597 5.5 10 5.5a.37.37 0 0 1 .363.375.37.37 0 0 1-.363.375Z"
          fill="#FFC875"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(6 4)" d="M0 0h8v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ElectricityIcon;
