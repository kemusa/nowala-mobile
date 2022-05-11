import { View, Image } from 'react-native';
import React from 'react';
import NowalaText from '../../../../components/atoms/text';
import styles from './styles';
import SunImage from '../../../../components/atoms/icons/SunImage';

const NowalaBrandingCardView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/more_projects_card_1.png',
        }}
      />
      <NowalaText.Headline2Light style={{ marginBottom: 10 }}>
        More Projects
      </NowalaText.Headline2Light>
      <NowalaText.Headline1 style={{}}>Coming Soon</NowalaText.Headline1>
    </View>
  );
};

export default NowalaBrandingCardView;
