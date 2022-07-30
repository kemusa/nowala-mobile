import React from 'react';
import { Svg, Path } from 'react-native-svg';

const WalletTabIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg width={20} height={18} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.769 5.382H20C20 1.985 17.964 0 14.516 0H5.484C2.036 0 0 1.985 0 5.338v7.324C0 16.015 2.036 18 5.484 18h9.032C17.964 18 20 16.015 20 12.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034Zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 0 1-.747.728H15.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.091 2.091 0 0 1 1.576-.74Zm.151 2.661h.329a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.746h-.329a.766.766 0 0 0-.54.213.727.727 0 0 0-.224.524c0 .413.34.75.764.754ZM4.738 5.382h5.644a.755.755 0 0 0 .765-.746.755.755 0 0 0-.765-.745H4.738a.755.755 0 0 0-.765.737c0 .413.341.749.765.754Z"
        fill={color || '#475972'}
      />
    </Svg>
  );
};

export default WalletTabIcon;