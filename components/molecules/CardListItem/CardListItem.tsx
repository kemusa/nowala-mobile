import React from 'react';
import { Input } from 'native-base';
import { useController } from 'react-hook-form';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { InputFieldProps } from '../../organisms/InputForm/types';
import { View } from 'react-native';
import ImpactCardIcon from '../../atoms/icons/ImpactCardIcon';

const CardListItem: React.FC<CardListItemProps> = ({
  title,
  subtitle,
  value,
  subvalue,
  icon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
      }}>
      <View style={{ flexDirection: 'row' }}>
        {icon}
        <View style={{ marginLeft: 10 }}>
          <NowalaText.Headline4>{title}</NowalaText.Headline4>
          <NowalaText.Subtitle2 style={{ fontSize: 11 }}>
            {subtitle}
          </NowalaText.Subtitle2>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <NowalaText.Body1>{value}</NowalaText.Body1>
        <NowalaText.Subtitle3 style={{ fontSize: 11 }}>
          {subvalue}
        </NowalaText.Subtitle3>
      </View>
    </View>
  );
};

export default CardListItem;
