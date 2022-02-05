import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import ImpactCard from './components/molecules/ImpactCard';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';

const { BACKGROUND } = colors;

const DashboardView: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <NowalaText.Headline1>Dashboard</NowalaText.Headline1>
      </View>
      <ScrollView
        style={{
          backgroundColor: BACKGROUND,
          height: '100%',
          padding: 20,
        }}>
        <ImpactCard />
        <ReturnBreakdown />
        <ProgressModal />
        <OptionsModal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
