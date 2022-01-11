import React from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';

const ImpactCardView = () => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Your Impact
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <NowalaText.Subtitle1>
          Thanks to you, 4 homes have affordable access to electricity.
        </NowalaText.Subtitle1>
      </View>
    </>
  );
};

export default ImpactCardView;
