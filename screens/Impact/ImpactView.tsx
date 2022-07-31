import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ImpactSummary from './components/organisms/ImpactSummary';
import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import MenuModal from './components/organisms/MenuModal';
import PeopleList from './components/organisms/PeopleList';

const { BACKGROUND } = colors;

const ImpactView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImpactSummary />
        <PeopleList />
        <OptionsModal />
        <MenuModal />
        <View style={styles.spacer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImpactView;
