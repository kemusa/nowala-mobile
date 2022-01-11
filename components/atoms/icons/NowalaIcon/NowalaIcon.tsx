import React from 'react';
import { View, Text } from 'react-native';
import {
  Svg,
  Path,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const NowalaIcon: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg
      width={width || 35}
      height={height || 40}
      fill="none"
      viewBox="0 0 71 75">
      <G
        clipPath="url(#prefix__clip0_1302:6869)"
        fillRule="evenodd"
        clipRule="evenodd">
        <Path
          d="M66.5 23.5v-3L38 36.5v34l3-1.5V38.819L66.5 23.5z"
          fill="url(#prefix__paint0_linear_1302:6869)"
        />
        <Path
          d="M39.069.647L38.055.065l-1.011.586L7.187 17.929l-1.012.586v4.787h4.056v-2.448L38.064 4.747l28.09 16.112V54l-28.09 16.308-27.833-16.302v-3.931H6.175v6.256l1.003.587 29.857 17.488 1.02.598 1.023-.594 30.123-17.488 1.01-.586V18.51l-1.02-.585L39.07.647zM16.4 32.857l-8.197-4.732-8.197 4.733v9.465l8.197 4.732 8.197-4.732v-9.465z"
          fill="#4B5A70"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1302:6869"
          x1={64.5}
          y1={21}
          x2={41}
          y2={68}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" />
          <Stop offset={1} stopColor="#F2DE2B" stopOpacity={0.81} />
        </LinearGradient>
        <ClipPath id="prefix__clip0_1302:6869">
          <Path fill="#fff" d="M0 0h70.313v75H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NowalaIcon;
