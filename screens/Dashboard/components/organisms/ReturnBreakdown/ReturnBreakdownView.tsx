import React, { useContext } from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';
import { DashboardContext } from '../../../DashboardContext';
import ReturnDetail from '../../molecules/ReturnDetail';
import CardDetailsButton from '../../../../../components/molecules/CardDetailsButton';
import CardWrapper from '../../../../../components/templates/CardWrapper';

const ReturnBreakdownView: React.FC<ReturnBreakdownProps> = () => {
  const { dashboardSummary } = useContext(DashboardContext);
  const {
    investment,
    collected,
    totalReturn,
    currency,
    returnPercent,
    assetTitle,
    openOptionsModal,
  } = dashboardSummary;
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        {assetTitle ? assetTitle : ''}
      </NowalaText.Headline2Light>
      <CardWrapper hasDetail={true} detailOnPress={openOptionsModal}>
        <View style={styles.columnContainer}>
          <View style={styles.col1}>
            <View style={styles.returnDetailContainer}>
              <ReturnDetail
                currency={currency}
                number={investment}
                description={'Your investment'}
              />
            </View>
            <View style={styles.returnDetailContainer}>
              <ReturnDetail
                currency={currency}
                number={collected}
                description={'You collected'}
              />
            </View>
            <View>
              <View>
                <ReturnDetail
                  currency={currency}
                  number={totalReturn}
                  description={'Expected Return'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View style={{ width: '100%', justifyContent: 'center' }}>
              <AnimatedCircularProgress
                size={120}
                width={15}
                backgroundWidth={7}
                fill={returnPercent}
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
      </CardWrapper>
    </>
  );
};

export default ReturnBreakdownView;
