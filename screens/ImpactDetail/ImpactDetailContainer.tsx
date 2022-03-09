import { View, Text } from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ImpactDetailScreenProps } from '../../navigation/types';
import { ImpactDetailContext } from './ImpactDetailContext';
import ImpactDetailView from './ImpactDetailView';
import ServicesContext, { Services } from '../../services';

const ImpactDetailContainer: React.FC<ImpactDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { impactDetail, userId, email } = params;
  const { backgroundColor, impact_metric } = impactDetail;
  const [viewNewOrder, setViewNewOrder] = useState(false);

  const projectAlias = 'solar_kits_ignite_power_sl'; // todo: make dynamic
  const projectId = 'ywpYsNv5F0Gv8YBtVQBX'; // todo: make dynamic and environment based

  const { analytics } = useContext(ServicesContext) as Services;

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

  // track screen
  useEffect(() => {
    analytics.screenWithProperties('Impact Detail', {
      impact_metric,
      project_alias: projectAlias,
    });
  }, []);

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
