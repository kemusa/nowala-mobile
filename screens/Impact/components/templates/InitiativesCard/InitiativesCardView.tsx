import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import NowalaText from '../../../../../components/atoms/text';

const InitiativesCardsView: React.FC<InitiativesCard> = ({
  title,
  icon,
  backgroundUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 160,
        width: 160,
        backgroundColor: '#938F8F',
        borderRadius: 6,
      }}
      activeOpacity={0.5}
      onPress={onPress}>
      <Image
        source={{ uri: backgroundUrl }}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: -2,
          borderRadius: 6,
        }}
      />
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#29407D',
          position: 'absolute',
          borderRadius: 6,
          opacity: 0.6,
          zIndex: -1,
        }}></View>
      <View style={{ padding: 8 }}>
        {icon}
        <NowalaText.Headline4 style={{ color: '#fff' }}>
          {title}
        </NowalaText.Headline4>
      </View>
    </TouchableOpacity>
  );
};

export default InitiativesCardsView;
