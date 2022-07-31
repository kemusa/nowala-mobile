import React from 'react';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardList from '../../../../../components/templates/CardList';
import CardListItem from '../../../../../components/molecules/CardListItem';
import DirectImpactCardIcon from '../../../../../components/atoms/icons/DirectImpactCardIcon';
import ImpactTogetherIcon from '../../../../../components/atoms/icons/ImpactTogetherIcon';

const ImpactSummaryView: React.FC<ImpactSummaryProps> = () => {
  const list = [
    <CardListItem
      icon={<DirectImpactCardIcon />}
      title={'Your direct impact'}
      subtitle={'Lorem ipsum lorem impsum'}
      value={93}
      subvalue="people"
    />,
    <CardListItem
      icon={<ImpactTogetherIcon />}
      title={'Our impact together'}
      subtitle={'Lorem ipsum lorem impsum'}
      value={560}
      subvalue={'people'}
    />,
  ];
  return (
    <>
      <CardWrapper type={'primary'} title={'Impact summary'}>
        <CardList list={list} />
      </CardWrapper>
    </>
  );
};

export default ImpactSummaryView;
