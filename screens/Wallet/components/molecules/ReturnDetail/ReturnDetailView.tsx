import React, { useContext } from 'react';
import NowalaText from '../../../../../components/atoms/text';
import { Text, View } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import Headline4Styles from '../../../../../components/atoms/text/Headline4/styles';
import { WalletCtx } from '../../../WalletContext';
import styles from './styles';

const ReturnDetailView: React.FC<ReturnDetail> = ({
  currency,
  number,
  description,
}) => {
  // Delineate numbers by decimal point and only take the first 2 items in the array
  const isFloat = (n: number) => {
    return Number(n) === n && n % 1 !== 0;
  };

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
        {isFloat(number) && (
          <>
            <NowalaText.Headline4>.</NowalaText.Headline4>
            <AnimatedNumber
              includeComma
              animateToNumber={parseInt(number.toString().split('.')[1])}
              animationDuration={2000}
              fontStyle={Headline4Styles.text}
            />
          </>
        )}
        {!isFloat(number) && (
          <>
            <NowalaText.Headline4>.</NowalaText.Headline4>
            <NowalaText.Headline4>00</NowalaText.Headline4>
          </>
        )}
      </View>
      <NowalaText.Subtitle1>{description}</NowalaText.Subtitle1>
    </>
  );
};

export default ReturnDetailView;
