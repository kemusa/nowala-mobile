import React from 'react';
import { Dimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { backgroundColor, flexDirection } from 'styled-system';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import colors from '../../../../../theme/colors';
import ImpactComing from '../../molecules/ImpactComing';
import { impactContent } from './ImpactContent';
import ImpactMetricCard from './ImpactMetricCard';
import styles from './styles';

const ImpactBreakdownView: React.FC<ImpactBreakdownProps> = ({
  impactMetrics,
  openProgressModal,
  goToImpactDetail,
  collected,
}) => {
  const content = impactContent;
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Your impact
      </NowalaText.Headline2Light>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {/* Dynamically generate impact metric cards based on metrics data */}
        {impactMetrics && collected ? (
          Object.keys(impactMetrics).map((item, idx) => (
            <ImpactMetricCard
              key={idx}
              metric={impactMetrics[item as keyof ImpactMetrics]}
              detail={content[item as keyof ImpactMetrics]}
              goToImpactDetail={goToImpactDetail}
            />
          ))
        ) : (
          <ImpactComing />
        )}
      </View>
    </>
  );
};

export default ImpactBreakdownView;
