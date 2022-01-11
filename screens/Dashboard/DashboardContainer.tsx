import React, { useContext, useEffect } from 'react';
import { DashboardScreenProps } from '../../navigation/types';
import { DashboardContext } from './DashboardContext';
import NowalaText from '../../components/atoms/text';
import HomeView from './DashboardView';
import ServicesContext, { Services } from '../../services';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { TouchableOpacity } from 'react-native';
import { statusInit, projectsInit } from './DashboardContent';

const HomeContainer: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const { asset, interest, collected, unitCost, units, currency } =
    projectsInit[0];
  const investment = unitCost * units;
  const totalReturn = parseInt((investment * (1 + interest)).toFixed());
  const returnPercent = Math.round((collected / totalReturn) * 100);
  const dashboardSummary: DashboardSummary = {
    investment,
    collected,
    totalReturn,
    currency,
    asset,
    returnPercent,
  };

  // Get services
  const { auth } = useContext(ServicesContext) as Services;

  const signOut = async () => {
    await auth.signOut();
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

  const checklist: CheckListItemProps[] = statusInit;
  return (
    <DashboardContext.Provider value={{ checklist, dashboardSummary }}>
      <HomeView />
    </DashboardContext.Provider>
  );
};

export default HomeContainer;
