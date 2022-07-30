import React from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import styles from './styles';

const ImpactBreakdownView: React.FC<PeopleStatsProps> = ({}) => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        People you've hepled
      </NowalaText.Headline2Light>
      <CardWrapper></CardWrapper>
    </>
  );
};

export default ImpactBreakdownView;
