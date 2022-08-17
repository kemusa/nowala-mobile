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
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon}
        <View style={{ marginLeft: 10 }}>
          <NowalaText.Headline4 style={{ marginBottom: 5 }}>
            {title}
          </NowalaText.Headline4>
          <NowalaText.Subtitle2>{subtitle}</NowalaText.Subtitle2>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <NowalaText.Body1 style={{ marginBottom: 5 }}>{value}</NowalaText.Body1>
        <NowalaText.Subtitle3>{subvalue}</NowalaText.Subtitle3>
      </View>
    </View>
  );
};

export default CardListItem;
