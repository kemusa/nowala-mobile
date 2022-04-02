import React, { useEffect } from 'react';
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
// import * as Updates from 'expo-updates';

const { BACKGROUND } = colors;
// useEffect(() => {
//   updateApp();
// }, []);
// const updateApp = async () => {
//   const update = await Updates.checkForUpdateAsync();
//   if (update.isAvailable) {
//     await Updates.fetchUpdateAsync();
//     // ... notify user of update ...
//     await Updates.reloadAsync();
//   }
// };

const DashboardView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Drawer isOpen={true}>
        <DrawerContentScrollView
          style={{ height: '100%', backgroundColor: '#fff' }}>
          <View style={{}}>
            <NowalaText.Headline1>Dashboard</NowalaText.Headline1>
          </View>
        </DrawerContentScrollView>
      </Drawer> */}
      <ScrollView
        style={{
          backgroundColor: BACKGROUND,
          height: '100%',
          padding: 20,
          flex: 1,
        }}>
        <ReturnBreakdown />
        <ImpactBreakdown />
        <ProgressModal />
        <OptionsModal />
        <View style={{ width: '100%', height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
