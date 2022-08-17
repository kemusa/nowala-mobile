import React from 'react';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';

const CardListItem: React.FC<CardListItemProps> = ({
  title,
  subtitle,
  value,
  subvalue,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
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
    </TouchableOpacity>
  );
};

export default CardListItem;
