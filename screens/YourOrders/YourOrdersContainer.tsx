import React, { useContext, useEffect } from 'react';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { AuthStackScreenProps } from '../../navigation/types';
import ServicesContext, { Services } from '../../services';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import { YourOrdersContext } from './YourOrdersContext';
import YourOrdersModalView from './YourOrdersView';

const YourOrdersContainer: React.FC<AuthStackScreenProps<'YourOrders'>> = ({
  navigation,
  route,
}) => {
  const orders = route.params.orders;
  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaIcon />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  const { analytics } = useContext(ServicesContext) as Services;

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.ORDER_DETAILS);
  }, []);

  return (
    <YourOrdersContext.Provider value={{ orders }}>
      <YourOrdersModalView />
    </YourOrdersContext.Provider>
  );
};

export default YourOrdersContainer;
