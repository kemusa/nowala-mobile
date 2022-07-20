import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ImpactBreakdown from './components/organisms/ImpactBreakdown';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import MenuModal from './components/organisms/MenuModal';

const { BACKGROUND } = colors;

const DashboardView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ReturnBreakdown />
        <ImpactBreakdown />
        <ProgressModal />
        <OptionsModal />
        <MenuModal />
        <View style={styles.spacer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
