import React from 'react';
import { View, Text } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import ActionButton from '../../../../../components/atoms/buttons/ActionButton';
import styles from './styles';

const IncompletePaymentPromptView = () => {
  return (
    <View>
      <NowalaText.Headline2Light style={styles.title}>
        Next step
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <NowalaText.Headline4>Sponsor items</NowalaText.Headline4>
        <ActionButton text="Sponsor now" onPress={() => {}} />
      </View>
    </View>
  );
};

export default IncompletePaymentPromptView;
