import { View, Image } from 'react-native';
import React from 'react';
import NowalaText from '../../../../components/atoms/text';
import styles from './styles';

const NowalaBrandingCardView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/road_image.png',
        }}
      />
      <NowalaText.Headline2Light style={styles.textWrapper}>
        MORE
      </NowalaText.Headline2Light>
      <NowalaText.Headline2Light style={styles.textWrapper}>
        PROJECTS
      </NowalaText.Headline2Light>
      <NowalaText.Headline2Light style={styles.textWrapper}>
        COMING
      </NowalaText.Headline2Light>
      <NowalaText.Headline2Light style={styles.textWrapper}>
        SOON
      </NowalaText.Headline2Light>
    </View>
  );
};

export default NowalaBrandingCardView;
