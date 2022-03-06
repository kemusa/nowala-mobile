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
  const { impactDetail } = params;
  const { backgroundColor } = impactDetail;
  const [viewNewOrder, setViewNewOrder] = useState(false);

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

  return (
    <ImpactDetailContext.Provider
      value={{
        impactDetail,
        openNewOrderModal,
        closeNewOrderModal,
        viewNewOrder,
      }}>
      <ImpactDetailView />
    </ImpactDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
