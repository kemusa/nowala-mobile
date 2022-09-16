import { View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { PeopleFullCtx } from './PeopleFullContext';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import CardWrapper from '../../components/templates/CardWrapper';
import CardLongList from '../../components/templates/CardLongList';
import PeopleItem from '../Impact/components/molecules/PeopleItem';

const PeopleFullView: React.FC<PeopleFullView> = () => {
  const { people, goToPeopleDetail } = useContext(PeopleFullCtx);
  const list = people.map(l => (
    <PeopleItem
      iconUrl={l.iconUrl}
      title={l.title}
      location={`${l.townCity}, ${l.country}`}
      numPeople={l.numPeople}
      onPress={goToPeopleDetail}
    />
  ));

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: '#fff' }]}>
      <ScrollView>
        <View style={{ marginTop: 50, padding: 10 }}>
          <CardWrapper title="People helped" type="primary" ctaText={'See all'}>
            <CardLongList list={list} />
          </CardWrapper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeopleFullView;
