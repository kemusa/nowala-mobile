import React, { useContext } from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';
import { DashboardContext } from '../../../ImpactContext';
import ReturnDetail from '../../molecules/ReturnDetail';
import CardDetailsButton from '../../../../../components/molecules/CardDetailsButton';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import WithdrawlModal from '../WithdrawlModal';

const ImpactSummaryView: React.FC<ImpactSummaryProps> = () => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        {'Impact summary'}
      </NowalaText.Headline2Light>
      <CardWrapper>
        <WithdrawlModal />
      </CardWrapper>
    </>
  );
};

export default ImpactSummaryView;
