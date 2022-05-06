import { View, Text } from 'react-native';
import React from 'react';
import NowalaLogoInverse from '../../../../components/atoms/icons/NowalaLogoInverse';
import NowalaText from '../../../../components/atoms/text';
import colors from '../../../../theme/colors';
import { spec } from '../../specs';
import styles from './styles';

const NowalaBrandingCardView = () => {
  return (
    <View style={styles.container}>
      <NowalaLogoInverse />
      <NowalaText.Headline2Light style={styles.topTextWrapper}>
        DISCOVER
      </NowalaText.Headline2Light>
      <NowalaText.Headline2Light style={styles.textWrapper}>
        SUPPORT
      </NowalaText.Headline2Light>
      <NowalaText.Headline2Light style={styles.textWrapper}>
        EARN
      </NowalaText.Headline2Light>
    </View>
  );
};

export default NowalaBrandingCardView;
