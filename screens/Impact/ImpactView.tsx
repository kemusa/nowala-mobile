import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import ImpactSummary from './components/organisms/ImpactSummary';
// import OptionsModal from './components/organisms/OptionsModal';
import colors from '../../theme/colors';
import PeopleList from './components/organisms/PeopleList';
import { ImpactCtx } from './ImpactContext';
import YourInitiatives from './components/organisms/YourInitiatives';
import MenuModal from '../../components/molecules/MenuModal';
import NewOrderModal from '../../components/organisms/NewOrdersModal';

const ImpactView: React.FC = () => {
  const {
    closeMenuModal,
    signOut,
    menuModalOpen,
    goToUserAccount,
    topUpModalOpen,
    closeTopUpModal,
    handleOrder,
    user,
  } = useContext(ImpactCtx);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImpactSummary />
        <View style={styles.spacerCards}></View>
        {/* {accountFunded && (
          <>
            <YourInitiatives />
            <View style={styles.spacerCards}></View>
          </>
        )} */}
        <PeopleList />
        <MenuModal
          isOpen={menuModalOpen}
          onClose={closeMenuModal}
          signOut={signOut}
          goToAccount={goToUserAccount}
        />
        <NewOrderModal
          isOpen={topUpModalOpen}
          title={''}
          pageRef={''}
          user={user}
          onClose={closeTopUpModal}
          onOrderSent={handleOrder}
          projectId={'solar_panel_kits_ignite_power_sl'}
        />
        <View style={styles.spacerBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImpactView;
