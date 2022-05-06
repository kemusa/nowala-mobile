import React, { useContext } from 'react';
import NowalaText from '../../../../../components/atoms/text';
import { View } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import Headline4Styles from '../../../../../components/atoms/text/Headline4/styles';
import { DashboardContext } from '../../../DashboardContext';
import styles from './styles';

const ReturnDetailView: React.FC<ReturnDetail> = ({
  currency,
  number,
  description,
}) => {
  return (
    <>
      <View style={styles.container}>
        <NowalaText.Headline4 style={styles.currencyText}>
          {currency}
        </NowalaText.Headline4>
        <AnimatedNumber
          includeComma
          animateToNumber={Math.round(number)}
          animationDuration={2000}
          fontStyle={Headline4Styles.text}
        />
      </View>
      <NowalaText.Subtitle1>{description}</NowalaText.Subtitle1>
    </>
  );
};

export default ReturnDetailView;
