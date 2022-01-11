import React, { useContext } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { DashboardContext } from './DashboardContext';
import CheckListItem from './components/molecules/CheckListItem';
import NowalaText from '../../components/atoms/text';
import ImpactCard from './components/molecules/ImpactCard';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';

const HomeView: React.FC = () => {
  const { checklist } = useContext(DashboardContext);

  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <NowalaText.Headline1>Dashboard</NowalaText.Headline1>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#F2F2F7',
          height: '100%',
          padding: 20,
        }}>
        <ImpactCard />
        <ReturnBreakdown />
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 150,
          position: 'absolute',
          bottom: 0,
        }}></View>
    </SafeAreaView>
  );
};

export default HomeView;
