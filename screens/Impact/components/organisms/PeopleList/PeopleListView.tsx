import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardLongList from '../../../../../components/templates/CardLongList';
import PeopleItem from '../../molecules/PeopleItem';
import { ImpactCtx } from '../../../ImpactContext';
import TopUpCard from '../../../../Wallet/components/organisms/TopUpCard';

const PeopleListView: React.FC = ({}) => {
  const { peopleList, accountFunded } = useContext(ImpactCtx);

  const list = peopleList.map(l => (
    <PeopleItem
      iconUrl={l.iconUrl}
      title={l.title}
      location={`${l.townCity}, ${l.country}`}
      numPeople={l.numPeople}
    />
  ));
  return (
    <>
      {peopleList.length > 0 ? (
        <CardWrapper
          type={'primary'}
          title={"People you've helped"}
          cta={() => {}}
          ctaText={'See all'}>
          <CardLongList list={list} />
        </CardWrapper>
      ) : accountFunded ? (
        <></>
      ) : (
        <TopUpCard />
      )}
    </>
  );
};

export default PeopleListView;
