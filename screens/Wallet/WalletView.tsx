import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ReturnBreakdown from './components/organisms/ReturnBreakdown';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import MenuModal from './components/organisms/MenuModal';
import AssetsList from './components/organisms/AssetsList';

const WalletView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ReturnBreakdown />
        <AssetsList />
        {/* <ProgressModal /> */}
        <OptionsModal />
        <MenuModal />
        <View style={styles.spacer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletView;
