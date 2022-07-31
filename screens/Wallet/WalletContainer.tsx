import React, { useContext, useEffect, useState } from 'react';
import { DashboardContext } from './WalletContext';
import NowalaText from '../../components/atoms/text';
import WalletView from './WalletView';
import ServicesContext, { Services } from '../../services';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { TouchableOpacity } from 'react-native';
import { firstProject } from '../Projects/Projects';
import { numberWithCommas } from '../../utils/helpers';
import moment from 'moment';
import { SnapshotData } from '../../services/types';
import colors from '../../theme/colors';
import { SponsorshipData } from './typesImport';
import { statusInit } from '../../utils/consts/DATA';
import { MainTabScreenProps } from '../../navigation/types';
import MenuButton from '../../components/atoms/buttons/MenuButton';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
// import * as Updates from 'expo-updates';

const { BACKGROUND } = colors;
interface DashboardProps extends MainTabScreenProps<'Wallet'> {
  email: string;
  userId: string;
  firstName: string;
}

const WalletContainer: React.FC<DashboardProps> = ({
  navigation,
  userId,
  email,
  firstName,
}) => {
  const [viewWithdrawlGuide, setViewWithdrawlGuide] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [unsubscribeList, setUnsubscribe] = useState([] as any);
  // variable to store unsubscription for dashboard data listener
  let dashboardUnsub = () => {};

  const [orders, setOrders] = useState([] as OrderData[]);

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity activeOpacity={0.5}>
          <NowalaIcon />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
      headerRight: () => <MenuButton onPress={openMenuModal} />,
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor: BACKGROUND,
      },
    });
  }, [navigation]);

  // useEffect(() => {
  //   updateApp();
  // }, []);

  // const updateApp = async () => {
  //   // const update = await Updates.checkForUpdateAsync();
  //   // if (update.isAvailable) {
  //   //   alert('hey');
  //   //   await Updates.fetchUpdateAsync();
  //   //   // ... notify user of update ...
  //   //   await Updates.reloadAsync();
  //   // }
  //   alert('start');
  //   Updates.addListener(event => {
  //     alert('foo');
  //     if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
  //       alert('bar');
  //       Updates.reloadAsync();
  //     }
  //     alert('baz');
  //   });
  // };

  // Get services
  const { auth, db, analytics } = useContext(ServicesContext) as Services;

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.WALLET);
  }, []);

  const [summary, setSummary] = useState({
    total: 0,
    activeMoney: 0,
    activePercent: 0,
    inactiveMoney: 0,
    inactivePercent: 0,
  } as WalletSummaryCard);

  // // Listener for dashboard data
  // useEffect(() => {
  //   const unsubscribe = db.subscribe(`users/${userId}/sponsorships`, () => {});
  //   dashboardUnsub = unsubscribe;
  // }, [userId]);

  // Listener for financial data
  // useEffect(() => {
  //   const unsubscribe = db.subscribe(
  //     `users/${userId}/financialSummary`,
  //     handleFinancialSummary,
  //   );
  //   dashboardUnsub = unsubscribe;
  // }, [userId]);

  // Sign out
  const signOut = async () => {
    dashboardUnsub();
    await auth.signOut();
    analytics.track(analyticsEvents.SIGNED_OUT);
  };

  const openWithdrawlModal = () => setViewWithdrawlGuide(true);
  const closeWithdrawlModal = () => setViewWithdrawlGuide(false);

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

  const handleFinancialSummary = (data: SnapshotData[]) => {
    if (data.length > 0) {
      console.log(data[0].data);
      //   const summary = data[0].data as FinancialSummary;
      //   const { totalCollected, totalInvested, currency } = summary;
      //   setFinancialSummary({
      //     totalCollected,
      //     totalInvested,
      //     currency,
      //     percent: Math.round((totalCollected / totalInvested) * 100),
      //   });
      setSummary({
        total: 0,
        activeMoney: 0,
        activePercent: 0,
        inactiveMoney: 0,
        inactivePercent: 0,
      });
    }
  };

  // const handleDashboardData = (data: SnapshotData[]) => {
  //   if (data.length > 0) {
  //     try {
  //       const sponsorship = data[0].data as SponsorshipData;
  //       const {
  //         asset,
  //         interest,
  //         collected,
  //         unitCost,
  //         units,
  //         currency,
  //         status,
  //         orderDate,
  //         paid,
  //       } = sponsorship;
  //       // if (!status.paid) goToAccountPending();
  //       const investment = unitCost * units;
  //       const totalReturn = parseInt((investment * (1 + interest)).toFixed());
  //       const returnPercent = Math.round((collected / totalReturn) * 100);
  //       const assetTitle =
  //         asset.charAt(0).toUpperCase() + asset.substring(1).toLowerCase();
  //       const order: OrderData = {
  //         date: moment(orderDate.toDate()).format('MMM Do YYYY'),
  //         units,
  //         investment: numberWithCommas(investment),
  //         paid,
  //         currency,
  //         assetTitle,
  //       };
  //       setOrders([order]);
  //       setSummary({
  //         total: 0,
  //         activeMoney: 0,
  //         activePercent: 0,
  //         inactiveMoney: 0,
  //         inactivePercent: 0,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  return (
    <DashboardContext.Provider
      value={{
        walletSummary: summary,
        viewWithdrawlGuide,
        menuModalOpen,
        openWithdrawlModal,
        closeWithdrawlModal,
        openMenuModal,
        closeMenuModal,
        signOut,
      }}>
      <WalletView />
    </DashboardContext.Provider>
  );
};

export default WalletContainer;
