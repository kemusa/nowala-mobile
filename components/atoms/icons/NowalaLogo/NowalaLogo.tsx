import React from 'react';
import {
  Svg,
  Path,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const NowalaLogo: React.FC<IconProps> = ({ height, width }) => {
  return (
    <Svg
      width={width || 143}
      height={height || 31}
      fill="none"
      viewBox="0 0 351 75">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.165 25.229l.165 44.333H83V5.494h.43l45.509 46.891-.166-45h8.245V71.54h-.258L91.165 25.229zm55.996 26.187c0-3.554.844-6.765 2.533-9.631 1.689-2.867 4.022-5.131 7-6.794 2.977-1.663 6.354-2.494 10.133-2.494 3.893 0 7.3.831 10.22 2.494 2.92 1.663 5.181 3.927 6.784 6.794 1.603 2.866 2.405 6.077 2.405 9.631 0 3.555-.802 6.78-2.405 9.675-1.603 2.895-3.879 5.174-6.827 6.837-2.949 1.663-6.37 2.494-10.263 2.494-3.778 0-7.142-.788-10.09-2.365-2.949-1.577-5.268-3.784-6.957-6.622s-2.533-6.177-2.533-10.019zm7.987.086c0 2.294.515 4.372 1.546 6.235 1.03 1.863 2.418 3.34 4.165 4.43 1.746 1.088 3.678 1.633 5.796 1.633 2.233 0 4.223-.545 5.969-1.634 1.746-1.09 3.106-2.566 4.079-4.429.973-1.863 1.46-3.941 1.46-6.235 0-2.293-.487-4.371-1.46-6.234a11.578 11.578 0 00-4.079-4.472c-1.746-1.118-3.736-1.677-5.969-1.677-2.175 0-4.136.573-5.882 1.72a12.249 12.249 0 00-4.122 4.515c-1.002 1.863-1.503 3.913-1.503 6.148zm70.566 4.697l9.01-22.24h7.815l-16.317 37.753L214.8 47.289l-10.391 24.423-16.489-37.753h7.815l9.573 21.7 6.658-15.508-2.834-6.192h6.87l9.712 22.24zm50.178-16.573l.579-5.667h7.385v35.603h-7.987v-5.817c-.188.247-.403.509-.644.786-.773.889-1.803 1.792-3.091 2.709-1.288.917-2.763 1.677-4.423 2.279-1.66.602-3.521.903-5.582.903-3.321 0-6.341-.717-9.06-2.15-2.72-1.433-4.867-3.54-6.441-6.32-1.575-2.782-2.362-6.178-2.362-10.192 0-3.956.83-7.381 2.491-10.276 1.66-2.895 3.878-5.117 6.655-6.665s5.826-2.322 9.146-2.322c3.321 0 6.126.76 8.416 2.279 2.094 1.389 3.733 3.006 4.918 4.85zM264.276 63.8c2.004 0 3.807-.373 5.41-1.118 1.603-.745 2.934-1.791 3.994-3.139 1.059-1.347 1.789-2.967 2.189-4.859V47.72c-.458-1.72-1.259-3.225-2.404-4.515a11.98 11.98 0 00-4.122-3.01c-1.603-.717-3.378-1.075-5.325-1.075-2.118 0-4.065.516-5.84 1.548-1.774 1.032-3.191 2.465-4.251 4.3-1.059 1.834-1.588 3.984-1.588 6.45 0 2.293.544 4.385 1.631 6.277 1.088 1.892 2.548 3.383 4.38 4.472a11.393 11.393 0 005.926 1.634zM295.03 3h7.987v66.562h-7.987V3zm47.695 36.626l.578-5.667h7.386v35.603h-7.987v-5.817c-.188.247-.403.509-.644.786-.773.889-1.803 1.792-3.091 2.709-1.289.917-2.763 1.677-4.423 2.279-1.661.602-3.521.903-5.582.903-3.321 0-6.341-.717-9.06-2.15-2.72-1.433-4.867-3.54-6.441-6.32-1.575-2.782-2.362-6.178-2.362-10.192 0-3.956.83-7.381 2.49-10.276 1.661-2.895 3.879-5.117 6.656-6.665 2.777-1.548 5.825-2.322 9.146-2.322 3.321 0 6.126.76 8.416 2.279 2.094 1.389 3.733 3.006 4.918 4.85zM331.109 63.8c2.004 0 3.807-.373 5.41-1.118 1.603-.745 2.934-1.791 3.993-3.139 1.06-1.347 1.789-2.967 2.19-4.859V47.72c-.458-1.72-1.259-3.225-2.404-4.515a11.975 11.975 0 00-4.123-3.01c-1.603-.717-3.377-1.075-5.324-1.075-2.118 0-4.065.516-5.84 1.548-1.775 1.032-3.192 2.465-4.251 4.3-1.059 1.834-1.588 3.984-1.588 6.45 0 2.293.543 4.385 1.631 6.277 1.088 1.892 2.548 3.383 4.38 4.472a11.393 11.393 0 005.926 1.634z"
        fill="#475972"
      />
      <G
        clipPath="url(#prefix__clip0_1301:6858)"
        fillRule="evenodd"
        clipRule="evenodd">
        <Path
          d="M66.5 23.5v-3L38 36.5v34l3-1.5V38.819L66.5 23.5z"
          fill="url(#prefix__paint0_linear_1301:6858)"
        />
        <Path
          d="M39.069.647L38.055.065l-1.011.586L7.187 17.929l-1.012.586v4.787h4.056v-2.448L38.064 4.747l28.09 16.112V54l-28.09 16.308-27.833-16.302v-3.931H6.175v6.256l1.003.587 29.857 17.488 1.02.598 1.023-.594L69.2 56.922l1.01-.586V18.51l-1.019-.585L39.07.647zM16.4 32.857l-8.197-4.732-8.197 4.733v9.465l8.197 4.732 8.197-4.732v-9.465z"
          fill="#4B5A70"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1301:6858"
          x1={64.5}
          y1={21}
          x2={41}
          y2={68}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" />
          <Stop offset={1} stopColor="#F2DE2B" stopOpacity={0.81} />
        </LinearGradient>
        <ClipPath id="prefix__clip0_1301:6858">
          <Path fill="#fff" d="M0 0h70.313v75H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NowalaLogo;
