import React, { useEffect } from 'react';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import NowalaLogo from '../../components/atoms/icons/NowalaLogo';
import { YourOrdersScreenProps } from '../../navigation/types';
import { YourOrdersContext } from './YourOrdersContext';
import YourOrdersModalView from './YourOrdersView';

const YourOrdersModalContainer: React.FC<YourOrdersScreenProps> = ({
  navigation,
  route,
}) => {
  const orders = route.params.orders;
  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaIcon />,
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  return (
    <YourOrdersContext.Provider value={{ orders }}>
      <YourOrdersModalView />
    </YourOrdersContext.Provider>
  );
};

export default YourOrdersModalContainer;
