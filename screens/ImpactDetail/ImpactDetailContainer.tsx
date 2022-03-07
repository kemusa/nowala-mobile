import { View, Text } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ImpactDetailScreenProps } from '../../navigation/types';
import { ImpactDetailContext } from './ImpactDetailContext';
import ImpactDetailView from './ImpactDetailView';

const ImpactDetailContainer: React.FC<ImpactDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { impactDetail, userId, email } = params;
  const { backgroundColor } = impactDetail;
  const [viewNewOrder, setViewNewOrder] = useState(false);

  const projectAlias = 'solar_kits_ignite_power_sl'; // todo: make dynamic
  const projectId = 'ywpYsNv5F0Gv8YBtVQBX'; // todo: make dynamic and environment based

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor,
      },
    });
  }, [navigation]);

  const openNewOrderModal = () => setViewNewOrder(true);
  const closeNewOrderModal = () => setViewNewOrder(false);

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ImpactDetailContext.Provider
      value={{
        impactDetail,
        openNewOrderModal,
        closeNewOrderModal,
        goToDashboard,
        viewNewOrder,
        userId,
        projectAlias,
        projectId,
        email,
      }}>
      <ImpactDetailView />
    </ImpactDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
