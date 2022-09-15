import React, { useContext, useEffect, useState } from 'react';
import { WalletCtx } from './WalletContext';
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
import {
  AssetPreview,
  AssetPreviewData,
  SponsorshipData,
  WalletSummaryCard,
  WalletSummaryData,
} from './typesModule';
import { statusInit, productMap } from '../../utils/consts/DATA';
import { MainTabScreenProps } from '../../navigation/types';
import MenuButton from '../../components/atoms/buttons/MenuButton';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
// import * as Updates from 'expo-updates';

const { BACKGROUND } = colors;
interface DashboardProps extends MainTabScreenProps<'Wallet'> {
  user: NowalaUserProfile;
}

const WalletContainer: React.FC<DashboardProps> = ({ navigation, user }) => {
  const [viewWithdrawlGuide, setViewWithdrawlGuide] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [topUpModalOpen, setTopUpModalOpen] = useState(false);
  const [unsubscribeList, setUnsubscribe] = useState([] as any);

  const [assets, setAssets] = useState([] as AssetPreview[]);
  const summaryInit: WalletSummaryCard = {
    total: 0,
    activeMoney: 0,
    activePercent: 0,
    inactiveMoney: 0,
    inactivePercent: 0,
    profit: 0,
    profitPercent: 0,
    currency: '£',
    waitlistNum: 0,
  };
  const [summary, setSummary] = useState({
    ...summaryInit,
  } as WalletSummaryCard);

  const [assetPreview, setAssetPreview] = useState([] as AssetPreview[]);

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
  //   if (user.userId) {
  //     const unsubscribe = db.subscribeToDoc(
  //       `users/${user.userId}`,
  //       handleUserData,
  //     );
  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, []);

  // const handleUserData = (data: any) => {
  //   console.log('WALLET', data);
  // };

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

  // Listener for summary data
  useEffect(() => {
    handleSummary();
  }, [user]);

  // Listener for people list data
  useEffect(() => {
    if (user.userId) {
      const unsubscribe = db.subscribeOrderBy(
        `users/${user.userId}/assets`,
        'orderNum',
        'desc',
        handleAssetList,
        3,
      );
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const openWithdrawlModal = () => setViewWithdrawlGuide(true);
  const closeWithdrawlModal = () => setViewWithdrawlGuide(false);

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

  const openTopUpModal = () => {
    setTopUpModalOpen(true);
  };
  const closeTopUpModal = () => setTopUpModalOpen(false);

  const handleSummary = () => {
    if (user.userId && user.moneySummary) {
      const { total, activeMoney, profit, profitPercent, currency } =
        user.moneySummary as WalletSummaryData;
      const inactiveMoney =
        Math.round((total - activeMoney + Number.EPSILON) * 100) / 100;
      const activePercent = Math.round((activeMoney / total) * 100) || 0;
      const inactivePercent = Math.round((1 - activeMoney / total) * 100) || 0;
      setSummary({
        profit,
        profitPercent,
        total,
        activeMoney,
        activePercent,
        inactiveMoney,
        inactivePercent,
        currency,
        waitlistNum: user.moneySummary.waitlistNum || 101,
      });
    } else {
      setSummary({ ...summaryInit });
    }
  };

  const handleOrder = (price: number, paymentRef: string) => {
    navigation.navigate('AuthStack', {
      screen: 'BankPayment',
      params: { redirectPage: 'Wallet', paymentRef, price },
    });
  };

  const handleAssetList = (data: SnapshotData[]) => {
    if (data.length > 0) {
      try {
        const assetsList = data.map(d => d.data) as AssetPreviewData[];
        const assets: AssetPreview[] = assetsList.map(a => {
          return {
            units: a.units,
            unitCost: a.unitCost,
            maturity: moment(a.maturity.toDate()).format('MMM Do YYYY'),
            repaid: a.repaid,
            installed: !!a.repaid,
            alias: a.alias,
          };
        });
        setAssets(assets);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const goToActiveCash = () => {
    navigation.navigate('AuthStack', {
      screen: 'ItemDetail',
      params: {
        title: 'Making an Impact',
        description:
          "The amount of cash currently invested in projects that are making an impact in people's lives.",
      },
    });
  };

  const goToBuyingPower = () => {
    navigation.navigate('AuthStack', {
      screen: 'ItemDetail',
      params: {
        title: 'Buying  power',
        description:
          "The amount of cash in your wallet that you can withdraw at any time or wait until it's invested on your behalf. We will let you know one week in advanced before it's invested.",
      },
    });
  };

  const goToProfit = () => {
    navigation.navigate('AuthStack', {
      screen: 'ItemDetail',
      params: {
        title: 'Total profit',
        description:
          'The amount of cash earned on your investments over the last year.',
      },
    });
  };

  const goToUserAccount = () => {
    navigation.navigate('AuthStack', { screen: 'UserAccount' });
  };

  const goToAssetDetail = () => {
    navigation.navigate('AuthStack', { screen: 'AssetDetail' });
  };

  // Sign out
  const signOut = async () => {
    await auth.signOut();
    analytics.track(analyticsEvents.SIGNED_OUT);
  };

  return (
    <WalletCtx.Provider
      value={{
        walletSummary: summary,
        assets,
        viewWithdrawlGuide,
        menuModalOpen,
        topUpModalOpen,
        user,
        handleOrder,
        openWithdrawlModal,
        closeWithdrawlModal,
        openTopUpModal,
        closeTopUpModal,
        openMenuModal,
        closeMenuModal,
        goToActiveCash,
        goToBuyingPower,
        goToProfit,
        signOut,
        goToUserAccount,
        goToAssetDetail,
      }}>
      <WalletView />
    </WalletCtx.Provider>
  );
};

export default WalletContainer;
