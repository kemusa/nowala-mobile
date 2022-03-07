import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import ImpactBreakdown from './components/organisms/ImpactBreakdown';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import { Drawer } from 'native-base';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const { BACKGROUND } = colors;

const DashboardView: React.FC = () => {
  return (
    <SafeAreaView>
      {/* <Drawer isOpen={true}>
        <DrawerContentScrollView
          style={{ height: '100%', backgroundColor: '#fff' }}>
          <View style={{}}>
            <NowalaText.Headline1>Dashboard</NowalaText.Headline1>
          </View>
        </DrawerContentScrollView>
      </Drawer> */}
      <View style={styles.headingContainer}>
        <NowalaText.Headline1>Dashboard</NowalaText.Headline1>
      </View>
      <ScrollView
        style={{
          backgroundColor: BACKGROUND,
          height: '100%',
          padding: 20,
        }}>
        <ReturnBreakdown />
        <ImpactBreakdown />
        <ProgressModal />
        <OptionsModal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
