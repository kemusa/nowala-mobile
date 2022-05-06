import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ImpactBreakdown from './components/organisms/ImpactBreakdown';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import MenuModal from './components/organisms/MenuModal';
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
        <MenuModal />
        <View style={{ width: '100%', height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
