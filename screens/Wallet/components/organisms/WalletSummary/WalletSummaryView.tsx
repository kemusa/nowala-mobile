import React, { useContext } from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import { WalletCtx } from '../../../WalletContext';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import ImpactCardIcon from '../../../../../components/atoms/icons/ImpactCardIcon';
import WalletCardIcon from '../../../../../components/atoms/icons/WalletCardIcon';
import ProfitCardIcon from '../../../../../components/atoms/icons/ProfitCardIcon';
import CardListItem from '../../../../../components/molecules/CardListItem';
import CardList from '../../../../../components/templates/CardList';
import ProfitArrowIcon from '../../../../../components/atoms/icons/ProfitArrowIcon';
import PlusCtaIcon from '../../../../../components/atoms/icons/PlusCtaIcon';

const WalletSummaryView: React.FC<WalletSummaryProps> = () => {
  const { walletSummary, openTopUpModal } = useContext(WalletCtx);
  const {
    activeMoney,
    activePercent,
    inactiveMoney,
    inactivePercent,
    total,
    profit,
    profitPercent,
  } = walletSummary;
  const list = [
    <CardListItem
      icon={<ImpactCardIcon />}
      title="Making an impact"
      subtitle="Your money at work changing lives"
      value={`£${activeMoney.toFixed(2)}`}
      subvalue={`${activePercent}%`}
    />,
    <CardListItem
      icon={<WalletCardIcon />}
      title="Buying power"
      subtitle="Available cash"
      value={`£${inactiveMoney.toFixed(2)}`}
      subvalue={`${inactivePercent}%`}
    />,
  ];
  return (
    <>
      <CardWrapper
        title="Your money"
        type="primary"
        cta={openTopUpModal}
        ctaText={'Top up'}
        ctaIcon={<PlusCtaIcon />}>
        <View style={styles.totalWalletContainer}>
          <NowalaText.Headline2 style={styles.totalMoneyValue}>
            {`£${total.toFixed(2)}`}
          </NowalaText.Headline2>
          <NowalaText.Subtitle1>Total</NowalaText.Subtitle1>
        </View>
        <CardList list={list} />
      </CardWrapper>
      <CardWrapper title="Returns" type="secondary">
        <CardListItem
          icon={<ProfitCardIcon />}
          title="Total profit"
          subtitle="Past year"
          value={`£${profit.toFixed(2)}`}
          subvalue={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ProfitArrowIcon />
              <NowalaText.Subtitle2 style={styles.profitPercentText}>
                {`${profitPercent}%`}
              </NowalaText.Subtitle2>
            </View>
          }
        />
      </CardWrapper>
    </>
  );
};

export default WalletSummaryView;
