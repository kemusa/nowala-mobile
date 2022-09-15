import React, { useContext, useEffect, useState } from 'react';
import { ImpactCtx } from './ImpactContext';
import ImpactView from './ImpactView';
import ServicesContext, { Services } from '../../services';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { TouchableOpacity } from 'react-native';
import { firstProject } from '../Projects/Projects';
import moment from 'moment';
import { SnapshotData } from '../../services/types';
import colors from '../../theme/colors';
import { MainTabScreenProps } from '../../navigation/types';
import MenuButton from '../../components/atoms/buttons/MenuButton';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';

const { BACKGROUND } = colors;
interface DashboardProps extends MainTabScreenProps<'Impact'> {
  user: NowalaUserProfile;
}

const ImpactContainer: React.FC<DashboardProps> = ({ navigation, user }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  // const [unsubscribeList, setUnsubscribe] = useState([] as any);
  // variable to store unsubscription for dashboard data listener
  let dashboardUnsub = () => {};

  const [peopleImpacted, setPeopleImpacted] = useState(0);
  const [peopleImpactedTogether, setPeopleImpactedTogether] = useState(0);
  const [accountFunded, setAccountFunded] = useState(true);
  const [peopleList, setPeopleList] = useState([] as PeopleList[]);

  // Get services
  const { auth, db, analytics } = useContext(ServicesContext) as Services;

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

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.IMPACT);
  }, []);

  // Listener for people list data
  useEffect(() => {
    const unsubscribe = db.subscribeOrderBy(
      `users/${user.userId}/people`,
      'dateAdded',
      'desc',
      handlePeopleList,
      3,
    );
    return () => {
      unsubscribe();
    };
  }, [user]);

  // Listener for impact summary data
  useEffect(() => {
    user.impactSummary && setPeopleImpacted(user.impactSummary.peopleImpacted);
  }, [user]);

  // API call for impact summary data
  useEffect(() => {
    if (!user.moneySummary) {
      setAccountFunded(false);
    }
    if (user.moneySummary && user.moneySummary.total > 0) {
      setAccountFunded(true);
    }
  }, [user]);

  // API call for community impact data
  useEffect(() => {
    handleCommunityImpact();
  }, [user]);

  // Sign out
  const signOut = async () => {
    await auth.signOut();
    analytics.track(analyticsEvents.SIGNED_OUT);
  };

  // const goToAccountPending = () => {
  //   navigation.navigate('Home');
  // };

  // const goToImpactDetail = (impactDetail: ImpactDetail) => {
  //   navigation.navigate('AuthStack', {
  //     screen: 'ImpactDetail',
  //     params: { impactDetail, userId, email, firstName },
  //   });
  // };

  // const openWithdrawlModal = () => setViewWithdrawlGuide(true);
  // const closeWithdrawlModal = () => setViewWithdrawlGuide(false);

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

  // const closeOrdersModal = () => setViewOrders(false);

  // const handleImpactSummary = async () => {
  //   const impactData = await db.findById(`users/${user.userId}/impactSummary/main`);
  //   console.log('RES', impactData);
  //   if (!impactData.data || impactData.data.peopleImpacted === 0) {
  //     console.log('FOO');
  //     const out = await db.findById(`users/${user.userId}/financialSummary/main`);
  //     console.log('OUT', out);
  //   }
  //   // const p = res ? res.data?.peopleImpacted : 0 || 0;
  //   // console.log('P', p);
  //   // setPeopleImpacted(p);
  // };

  // const handleImpactSummary = async (data: SnapshotData[]) => {
  //   if (data.length > 0) {
  //     setPeopleImpacted(data[0].data.peopleImpacted || 0);
  //   }
  // };

  const handleCommunityImpact = async () => {
    if (user.impactSummary) {
      const doc = await db.findById('community/main');
      const totalPeople = doc.data ? doc.data.peopleImpacted : 0;
      setPeopleImpactedTogether(totalPeople);
    }
  };

  const handlePeopleList = (data: SnapshotData[]) => {
    if (data.length > 0) {
      try {
        setPeopleList(
          data.map(o => {
            return {
              beneficiaryOccupation: o.data.beneficiaryOccupation,
              townCity: o.data.townCity,
              country: o.data.country,
              iconUrl: o.data.iconUrl,
              numPeople: o.data.peopleHelped,
              title: o.data.title,
            };
          }),
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const goToTotalImpact = () => {
    navigation.navigate('AuthStack', {
      screen: 'ItemDetail',
      params: {
        title: 'Your total impact',
        description:
          "The number of people you've directly helped with your investments.",
      },
    });
  };

  const goToImpactTogether = () => {
    navigation.navigate('AuthStack', {
      screen: 'ItemDetail',
      params: {
        title: 'Our impact together',
        description:
          'The number of people helped directly by the Nowala community.',
      },
    });
  };

  const goToProjectDetails = () => {
    navigation.navigate('ProjectDetails', {
      project: firstProject,
    });
  };

  const goToUserAccount = () => {
    navigation.navigate('AuthStack', { screen: 'UserAccount' });
  };

  const goToPeopleDetail = () => {
    navigation.navigate('AuthStack', {screen: 'PeopleDetail'})
  };

  return (
    <ImpactCtx.Provider
      value={{
        peopleImpacted,
        peopleImpactedTogether,
        peopleList,
        accountFunded,
        waitlistNum: user.moneySummary.waitlistNum || 101,
        menuModalOpen,
        goToTotalImpact,
        goToImpactTogether,
        goToProjectDetails,
        openMenuModal,
        closeMenuModal,
        signOut,
        goToUserAccount,
        goToPeopleDetail,
      }}>
      <ImpactView />
    </ImpactCtx.Provider>
  );
};

export default ImpactContainer;
