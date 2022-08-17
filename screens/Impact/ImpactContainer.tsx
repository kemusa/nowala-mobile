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
  email: string;
  userId: string;
  firstName: string;
}

const ImpactContainer: React.FC<DashboardProps> = ({
  navigation,
  userId,
  email,
  firstName,
}) => {
  const [viewOrders, setViewOrders] = useState(false);
  const [viewWithdrawlGuide, setViewWithdrawlGuide] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [unsubscribeList, setUnsubscribe] = useState([] as any);
  // variable to store unsubscription for dashboard data listener
  let dashboardUnsub = () => {};

  const [peopleImpacted, setPeopleImpacted] = useState(0);
  const [peopleImpactedTogether, setPeopleImpactedTogether] = useState(0);

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
      `users/${userId}/people`,
      'dateAdded',
      'desc',
      handlePeopleList,
      3,
    );
    dashboardUnsub = unsubscribe;
  }, [userId]);

  // Listener for impact summary data
  useEffect(() => {
    const unsubscribe = db.subscribe(
      `users/${userId}/impactSummary`,
      handleImpactSummary,
    );
    dashboardUnsub = unsubscribe;
  }, [userId]);

  // Sign out
  const signOut = async () => {
    dashboardUnsub();
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

  const handleImpactSummary = async (data: SnapshotData[]) => {
    if (data.length > 0) {
      const doc = await db.findById('community/main');
      const totalPeople = doc.data ? doc.data.peopleImpacted : 0;
      setPeopleImpacted(data[0].data.peopleImpacted);
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

  return (
    <ImpactCtx.Provider
      value={{ peopleImpacted, peopleImpactedTogether, peopleList }}>
      <ImpactView />
    </ImpactCtx.Provider>
  );
};

export default ImpactContainer;
