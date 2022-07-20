import React, { useContext } from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';
import { DashboardContext } from '../../../DashboardContext';
import ReturnDetail from '../../molecules/ReturnDetail';
import CardDetailsButton from '../../../../../components/molecules/CardDetailsButton';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import WithdrawlModal from '../WithdrawlModal';
import ImpactCardIcon from '../../../../../components/atoms/icons/ImpactCardIcon';
import WalletCardIcon from '../../../../../components/atoms/icons/WalletCardIcon';
import ProfitCardIcon from '../../../../../components/atoms/icons/ProfitCardIcon';
import CardListItem from '../../../../../components/molecules/CardListItem';

const ReturnBreakdownView: React.FC<ReturnBreakdownProps> = () => {
  const { dashboardSummary, financialSummary, openWithdrawlModal } =
    useContext(DashboardContext);
  const {
    investment,
    collected,
    // totalReturn,
    // currency,
    returnPercent,
    assetTitle,
    openOptionsModal,
  } = dashboardSummary;

  const { totalCollected, totalInvested, currency, percent } = financialSummary;
  // console.log('FOO', returnPercent);
  // console.log('BAR', Math.round((totalCollected / totalInvested) * 100));
  // const percent = Math.round((totalCollected / totalInvested) * 100);
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        {'Your money'}
      </NowalaText.Headline2Light>
      <CardWrapper>
        <View style={styles.container}>
          <View>
            <NowalaText.Headline2>£2054</NowalaText.Headline2>
            <NowalaText.Subtitle1>Total</NowalaText.Subtitle1>
          </View>
          <CardListItem
            icon={<ImpactCardIcon />}
            title="Making an impact"
            subtitle="Your money at work changing lives"
            value="£1090"
            subvalue="53%"
          />
          <CardListItem
            icon={<WalletCardIcon />}
            title="Buying power"
            subtitle="You can withdraw anytime"
            value="£964"
            subvalue="47%"
          />
        </View>
      </CardWrapper>
      <CardWrapper>
        <CardListItem
          icon={<ProfitCardIcon />}
          title="Total profit"
          subtitle="Interest earned on all investments"
          value="£30"
          subvalue="47%"
        />
      </CardWrapper>
    </>
  );
};

export default ReturnBreakdownView;
