import React from 'react';
import {
  Svg,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const ImpactCardIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg width={35} height={35} fill="none">
      <Circle cx={17.5} cy={17.5} r={17.5} fill="#FFCCD4" />
      <Path
        opacity={0.4}
        d="M17.304 26.108a31.726 31.726 0 0 1-5.537-4.338 11.085 11.085 0 0 1-2.652-4.204c-.995-3.098.164-6.638 3.399-7.689a5.497 5.497 0 0 1 4.993.885 5.505 5.505 0 0 1 4.992-.885c3.236 1.051 4.402 4.591 3.407 7.689a11.086 11.086 0 0 1-2.637 4.204 32.013 32.013 0 0 1-5.537 4.338l-.218.142-.21-.142Z"
        fill="url(#a)"
      />
      <Path
        d="m17.51 26.25-.206-.142c-2-1.234-3.86-2.689-5.545-4.338a11.084 11.084 0 0 1-2.667-4.204c-.988-3.097.17-6.638 3.406-7.689a5.51 5.51 0 0 1 5.011.895V26.25Z"
        fill="url(#b)"
      />
      <Path
        d="M22.952 15.75a.629.629 0 0 1-.453-.244.716.716 0 0 1-.146-.517c.019-.615-.331-1.174-.87-1.392-.342-.093-.55-.463-.464-.829.081-.359.418-.582.756-.502a.335.335 0 0 1 .121.046c1.082.416 1.782 1.536 1.726 2.76a.707.707 0 0 1-.2.49.62.62 0 0 1-.47.187Z"
        fill="url(#c)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={17.51}
          y1={9.625}
          x2={17.51}
          y2={26.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F28A9A" />
          <Stop offset={1} stopColor="#D23048" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={13.13}
          y1={9.625}
          x2={13.13}
          y2={26.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F28A9A" />
          <Stop offset={1} stopColor="#D23048" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={22.313}
          y1={12.25}
          x2={22.313}
          y2={15.75}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F28A9A" />
          <Stop offset={1} stopColor="#D23048" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ImpactCardIcon;
