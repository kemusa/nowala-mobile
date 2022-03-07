import { View, Text } from 'react-native';
<<<<<<< Updated upstream
import React, { useEffect, useLayoutEffect } from 'react';
=======
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
>>>>>>> Stashed changes
import { ImpactDetailScreenProps } from '../../navigation/types';
import { ImpactDetailContext } from './ImpactDetailContext';
import ImpactDetailView from './ImpactDetailView';
import ServicesContext, { Services } from '../../services';

const ImpactDetailContainer: React.FC<ImpactDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { impactDetail } = params;
  const { backgroundColor } = impactDetail;
<<<<<<< Updated upstream
  useLayoutEffect(() => {
=======
  const [viewNewOrder, setViewNewOrder] = useState(false);

  const projectAlias = 'solar_kits_ignite_power_sl'; // todo: make dynamic
  const projectId = 'ywpYsNv5F0Gv8YBtVQBX'; // todo: make dynamic and environment based

  const { analytics } = useContext(ServicesContext) as Services;

  useEffect(() => {
>>>>>>> Stashed changes
    navigation.setOptions({
      headerTitleAlign: 'left',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor: backgroundColor,
      },
    });
  }, [navigation]);
<<<<<<< Updated upstream
=======

  // track screen
  useEffect(() => {
    analytics.screen('Impact Detail');
  }, []);

  const openNewOrderModal = () => setViewNewOrder(true);
  const closeNewOrderModal = () => setViewNewOrder(false);

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

>>>>>>> Stashed changes
  return (
    <ImpactDetailContext.Provider value={{ ...impactDetail }}>
      <ImpactDetailView />
    </ImpactDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
