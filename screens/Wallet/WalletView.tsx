import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import WalletSummary from './components/organisms/WalletSummary';
import ProgressModal from './components/organisms/ProgressModal';
import OptionsModal from './components/organisms/OptionsModal';
import MenuModal from './components/organisms/MenuModal';
import AssetsList from './components/organisms/AssetsList';
import NewOrderModal from '../../components/organisms/NewOrdersModal';
import { WalletCtx } from './WalletContext';

const WalletView: React.FC = () => {
  const { topUpModalOpen, user, closeTopUpModal, handleOrder } =
    useContext(WalletCtx);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <WalletSummary />
        <View style={styles.spacerCards}></View>
        <AssetsList />
        {/* <ProgressModal /> */}
        <OptionsModal />
        <NewOrderModal
          isOpen={topUpModalOpen}
          title={''}
          pageRef={''}
          user={user}
          onClose={closeTopUpModal}
          onOrderSent={handleOrder}
          projectId={'solar_panel_kits_ignite_power_sl'}
        />
        <MenuModal />
        <View style={styles.spacerBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletView;
