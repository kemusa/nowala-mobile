import React from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';

const ImpactCardView: React.FC<ImpactCardProps> = ({ collected, units }) => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Your Impact
      </NowalaText.Headline2Light>

      {units > 0 ? (
        collected > 0 ? (
          <View style={styles.card}>
            <NowalaText.Subtitle1>
              Thanks to you,{' '}
              {units > 1 ? `${units} homes have` : `${units} home has`}{' '}
              affordable access to electricity.
            </NowalaText.Subtitle1>
          </View>
        ) : (
          <View style={styles.card}>
            <NowalaText.Subtitle1>
              Soon, {units > 1 ? `${units} homes` : `${units} home`} will have
              affordable access to electricity.
            </NowalaText.Subtitle1>
          </View>
        )
      ) : (
        <View style={styles.card}>
          <NowalaText.Subtitle1>
            We are processing your order. Soon your investment will provide
            affordable access to electricity for 1 or more homes in Sierra
            Leone.
          </NowalaText.Subtitle1>
        </View>
      )}
    </>
  );
};

export default ImpactCardView;
