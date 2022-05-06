import React, { useContext, useEffect, useState } from 'react';
import { ImpactDetailContext } from './ImpactDetailContext';
import ImpactDetailView from './ImpactDetailView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import {
  AuthStackScreenProps,
  RootStackScreenProps,
} from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';

const ImpactDetailContainer: React.FC<AuthStackScreenProps<'ImpactDetail'>> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { impactDetail, userId, email, firstName } = params;
  const { backgroundColor, impact_metric } = impactDetail;
  const [viewNewOrder, setViewNewOrder] = useState(false);

  const projectId = PROJECT_ID; // todo: make dynamic and environment based

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
    analytics.screenWithProperties(analyticsScreens.IMPACT_DETAIL, {
      impact_metric,
      project_alias: projectId,
    });
  }, []);

  const openNewOrderModal = () => setViewNewOrder(true);
  const closeNewOrderModal = () => setViewNewOrder(false);

  const onOrderSent = (price: number, paymentRef: string) => {
    navigation.navigate('AuthStack', {
      screen: 'BankPayment',
      params: { redirectPage: 'Dashboard', paymentRef, price },
    });
  };

  return (
    <ImpactDetailContext.Provider
      value={{
        impactDetail,
        openNewOrderModal,
        closeNewOrderModal,
        onOrderSent,
        viewNewOrder,
        userId: userId,
        projectId,
        email: email,
        firstName,
      }}>
      <ImpactDetailView />
    </ImpactDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
