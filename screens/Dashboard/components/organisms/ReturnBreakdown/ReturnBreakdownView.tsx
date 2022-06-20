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
        {'Solar panel kits'}
      </NowalaText.Headline2Light>
      <CardWrapper hasDetail={true} detailOnPress={openOptionsModal}>
        <View style={styles.columnContainer}>
          <View style={styles.col1}>
            <View style={styles.returnDetailContainer}>
              <ReturnDetail
                currency={currency}
                number={totalInvested}
                description={'Your investment'}
              />
            </View>
            {/* <View style={styles.returnDetailContainer}>
              <ReturnDetail
                currency={currency}
                number={totalReturn}
                description={'Expected payback'}
              />
            </View> */}
            <View>
              <ReturnDetail
                currency={'£'}
                number={totalCollected}
                description={'Return collected'}
              />
            </View>
          </View>
          <View style={styles.col2}>
            <View style={{ width: '100%', justifyContent: 'center' }}>
              <AnimatedCircularProgress
                size={120}
                width={15}
                backgroundWidth={7}
                fill={percent}
                // Math.roud on value (again) to handle infitite decimals issue
                children={value => (
                  <>
                    <NowalaText.Headline4 style={{ color: '#5E8497' }}>
                      {Math.round(value) || 0}
                      {'%'}
                    </NowalaText.Headline4>
                    <NowalaText.Body1 style={{ color: '#5E8497' }}>
                      repaid
                    </NowalaText.Body1>
                  </>
                )}
                tintColor="#FFBF00"
                rotation={0}
                duration={2000}
                backgroundColor="#BAD8E2"
              />
            </View>
          </View>
        </View>
        {totalCollected > 0 && (
          <View style={{ marginTop: 10 }}>
            <NowalaText.LinkText2 onPress={openWithdrawlModal}>
              How do I withdraw my return?
            </NowalaText.LinkText2>
          </View>
        )}
        <WithdrawlModal />
      </CardWrapper>
    </>
  );
};

export default ReturnBreakdownView;
