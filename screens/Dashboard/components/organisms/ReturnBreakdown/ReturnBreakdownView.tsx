import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';
import { DashboardContext } from '../../../DashboardContext';
import ReturnDetail from '../../molecules/ReturnDetail';

const ReturnBreakdownView = () => {
  const { dashboardSummary } = useContext(DashboardContext);
  const { investment, collected, totalReturn, currency, returnPercent, asset } =
    dashboardSummary;
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        {asset
          ? asset.charAt(0).toUpperCase() + asset.substring(1).toLowerCase()
          : ''}
      </NowalaText.Headline2Light>
      <View style={styles.breakdownContainer}>
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
                  <NowalaText.Headline4 style={{ color: '#5E8497' }}>
                    {Math.round(value) || 0}
                    {'%'}
                  </NowalaText.Headline4>
                )}
                tintColor="#FFBF00"
                rotation={0}
                duration={2000}
                backgroundColor="#BAD8E2"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ReturnBreakdownView;
