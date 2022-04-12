import React, { useContext, useEffect } from 'react';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { RootStackScreenProps } from '../../navigation/types';
import ServicesContext, { Services } from '../../services';
import { YourOrdersContext } from './YourOrdersContext';
import YourOrdersModalView from './YourOrdersView';

const YourOrdersContainer: React.FC<RootStackScreenProps<'YourOrders'>> = ({
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
    analytics.screen('Order Details');
  }, []);

  return (
    <YourOrdersContext.Provider value={{ orders }}>
      <YourOrdersModalView />
    </YourOrdersContext.Provider>
  );
};

export default YourOrdersContainer;
