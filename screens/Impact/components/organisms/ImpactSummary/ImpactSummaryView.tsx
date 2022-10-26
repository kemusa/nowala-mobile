import React, { useContext } from 'react';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardList from '../../../../../components/templates/CardList';
import CardListItem from '../../../../../components/molecules/CardListItem';
import DirectImpactCardIcon from '../../../../../components/atoms/icons/DirectImpactCardIcon';
import ImpactTogetherIcon from '../../../../../components/atoms/icons/ImpactTogetherIcon';
import { ImpactCtx } from '../../../ImpactContext';

const ImpactSummaryView: React.FC<ImpactSummaryProps> = () => {
  const {
    peopleImpacted,
    peopleImpactedTogether,
    goToTotalImpact,
    goToImpactTogether,
  } = useContext(ImpactCtx);
  const list = [
    <CardListItem
      icon={<DirectImpactCardIcon />}
      title={'Your total impact'}
      subtitle={"How many people you've helped"}
      value={peopleImpacted}
      subvalue="people"
      onPress={goToTotalImpact}
    />,
    <CardListItem
      icon={<ImpactTogetherIcon />}
      title={'Our impact together'}
      subtitle={'People helped by Nowala community'}
      value={peopleImpactedTogether}
      subvalue={'people'}
      onPress={goToImpactTogether}
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
