import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import WalletSummary from './components/organisms/WalletSummary';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import MenuModal from './components/organisms/MenuModal';
import AssetsList from './components/organisms/AssetsList';

const WalletView: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <WalletSummary />
        <View style={styles.spacerCards}></View>
        <AssetsList />
        {/* <ProgressModal /> */}
        <OptionsModal />
        <MenuModal />
        <View style={styles.spacerBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletView;
