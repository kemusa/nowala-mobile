import React, { useContext } from 'react';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardLongList from '../../../../../components/templates/CardLongList';
import PeopleItem from '../../molecules/PeopleItem';
import { ImpactCtx } from '../../../ImpactContext';
import TopUpCard from '../../../../Wallet/components/organisms/TopUpCard';
import ImpactWaitListCard from '../ImpactWaitListCard';

const PeopleListView: React.FC = ({}) => {
  const {
    peopleList,
    accountFunded,
    goToPeopleDetail,
    goToAllPeopleHelped,
    openTopUpModal,
  } = useContext(ImpactCtx);

  const list = peopleList.map(l => (
    <PeopleItem
      iconUrl={l.iconUrl}
      title={l.title}
      location={`${l.townCity}, ${l.country}`}
      numPeople={l.numPeople}
      onPress={goToPeopleDetail}
    />
  ));
  return (
    <>
      {peopleList.length > 0 ? (
        <CardWrapper
          type={'primary'}
          title={'People you helped'}
          cta={goToAllPeopleHelped}
          ctaText={'See all'}>
          <CardLongList list={list} />
        </CardWrapper>
      ) : accountFunded ? (
        <ImpactWaitListCard />
      ) : (
        <TopUpCard openTopUpModal={openTopUpModal} />
      )}
    </>
  );
};

export default PeopleListView;
