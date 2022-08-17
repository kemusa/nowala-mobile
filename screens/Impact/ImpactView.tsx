import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ImpactSummary from './components/organisms/ImpactSummary';
// import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import PeopleList from './components/organisms/PeopleList';

const { BACKGROUND } = colors;

const ImpactView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImpactSummary />
        <View style={styles.spacerCards}></View>
        <PeopleList />
        {/* <OptionsModal /> */}
        <View style={styles.spacerBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImpactView;
