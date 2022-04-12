import React, { useContext, useEffect, useState } from 'react';
import { DashboardContext } from './DashboardContext';
import NowalaText from '../../components/atoms/text';
import HomeView from './DashboardView';
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

const { BACKGROUND } = colors;
interface DashboardProps extends MainTabScreenProps<'Dashboard'> {
  email: string;
  userId: string;
}

const DashboardContainer: React.FC<DashboardProps> = ({
  navigation,
  userId,
  email,
}) => {
  const [viewProgress, setViewProgress] = useState(false);
  const [viewOptions, setViewOptions] = useState(false);
  const [viewOrders, setViewOrders] = useState(false);
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
      headerRight: () => (
        // <MenuButton onPress={() => {}} />
        <NowalaText.LinkText style={{ marginRight: 15 }} onPress={signOut}>
          Sign out
        </NowalaText.LinkText>
      ),
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor: BACKGROUND,
      },
    });
  }, [navigation]);

  // Get services
  const { auth, db, analytics } = useContext(ServicesContext) as Services;

  // track screen
  useEffect(() => {
    analytics.screen('Dashboard');
  }, []);

  const [summary, setSummary] = useState({
    investment: 0,
    collected: 0,
    totalReturn: 0,
    currency: 'SLL',
    assetTitle: '',
    returnPercent: 0,
    units: 0,
    progress: statusInit,
    impactMetrics: undefined,
  } as DashboardSummary);

  // Listener for dashboard data
  useEffect(() => {
    const unsubscribe = db.subscribe(
      `users/${userId}/sponsorships`,
      handleDashboardData,
    );
    dashboardUnsub = unsubscribe;
  }, [userId]);

  // Sign out
  const signOut = async () => {
    dashboardUnsub();
    await auth.signOut();
    analytics.track('User Signed Out');
  };

  // Navigate to project details from modal then close modal
  const goToProject = () => {
    navigation.navigate('ProjectDetails', {
      project: firstProject,
    });
    closeOptionsModal();
  };

  const goToYourOrders = () => {
    navigation.navigate('YourOrders', { orders });
    closeOptionsModal();
  };

  // const goToAccountPending = () => {
  //   navigation.navigate('Home');
  // };

  const goToImpactDetail = (impactDetail: ImpactDetail) => {
    navigation.navigate('ImpactDetail', { impactDetail, userId, email });
  };

  const openProgressModal = () =>
    setViewProgress(() => {
      analytics.track('Viewed Progress');
      return true;
    });
  const closeProgressModal = () => setViewProgress(false);

  const openOptionsModal = () => setViewOptions(true);
  const closeOptionsModal = () => setViewOptions(false);

  const closeOrdersModal = () => setViewOrders(false);

  const handleDashboardData = (data: SnapshotData[]) => {
    if (data.length > 0) {
      try {
        const sponsorship = data[0].data as SponsorshipData;
        const {
          asset,
          interest,
          collected,
          unitCost,
          units,
          currency,
          status,
          orderDate,
          paid,
          impactMetrics,
        } = sponsorship;
        // if (!status.paid) goToAccountPending();
        const investment = unitCost * units;
        const totalReturn = parseInt((investment * (1 + interest)).toFixed());
        const returnPercent = Math.round((collected / totalReturn) * 100);
        const assetTitle =
          asset.charAt(0).toUpperCase() + asset.substring(1).toLowerCase();
        const order: OrderData = {
          date: moment(orderDate.toDate()).format('MMM Do YYYY'),
          units,
          investment: numberWithCommas(investment),
          paid,
          currency,
          assetTitle,
        };
        setOrders([order]);
        setSummary({
          investment,
          collected,
          totalReturn,
          currency,
          assetTitle,
          returnPercent,
          units,
          progress: status,
          impactMetrics,
          openOptionsModal,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardSummary: summary,
        viewProgress,
        viewOptions,
        viewOrders,
        openProgressModal,
        closeProgressModal,
        closeOptionsModal,
        closeOrdersModal,
        goToProject,
        goToYourOrders,
        goToImpactDetail,
      }}>
      <HomeView />
    </DashboardContext.Provider>
  );
};

export default DashboardContainer;
