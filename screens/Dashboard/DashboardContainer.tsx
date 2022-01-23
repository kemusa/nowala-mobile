import React, { useContext, useEffect, useState } from 'react';
import { DashboardScreenProps } from '../../navigation/types';
import { DashboardContext } from './DashboardContext';
import NowalaText from '../../components/atoms/text';
import HomeView from './DashboardView';
import ServicesContext, { Services } from '../../services';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { TouchableOpacity } from 'react-native';

const HomeContainer: React.FC<DashboardScreenProps> = ({
  navigation,
  userId,
}) => {
  // Get services
  const { auth, db } = useContext(ServicesContext) as Services;
  const [summary, setSummary] = useState({
    investment: 0,
    collected: 0,
    totalReturn: 0,
    currency: 'SLL',
    asset: '',
    returnPercent: 0,
  } as DashboardSummary);

  const [viewProgress, setViewProgress] = useState(false);

  useEffect(() => {
    getDashboardData();
  }, []);

  const signOut = async () => {
    await auth.signOut();
  };

  const openProgressModal = () => setViewProgress(true);
  const closeProgressModal = () => setViewProgress(false);

  const getDashboardData = async () => {
    try {
      const data = await db.findCollection(`users/${userId}/sponsorships`);
      const sponsorship: SponsorshipData = data[0].data as SponsorshipData;
      const {
        asset,
        interest,
        collected,
        unitCost,
        units,
        currency,
        progress,
      } = sponsorship;
      const investment = unitCost * units;
      const totalReturn = parseInt((investment * (1 + interest)).toFixed());
      const returnPercent = Math.round((collected / totalReturn) * 100);
      setSummary({
        investment,
        collected,
        totalReturn,
        currency,
        asset,
        returnPercent,
        units,
        progress,
        openProgressModal,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Place Moonsift logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity activeOpacity={0.5}>
          <NowalaIcon />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
      headerRight: () => (
        <NowalaText.LinkText style={{ marginRight: 15 }} onPress={signOut}>
          Sign out
        </NowalaText.LinkText>
      ),
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // const checklist: CheckListItemProps[] = statusInit;
  return (
    <DashboardContext.Provider
      value={{ dashboardSummary: summary, viewProgress, closeProgressModal }}>
      <HomeView />
    </DashboardContext.Provider>
  );
};

export default HomeContainer;
