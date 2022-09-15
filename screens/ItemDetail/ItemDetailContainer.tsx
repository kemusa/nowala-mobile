import React, { useContext, useEffect, useState } from 'react';
import { ItemDetailContext } from './ItemDetailContext';
import ImpactDetailView from './ItemDetailView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';

const ImpactDetailContainer: React.FC<AuthStackScreenProps<'ItemDetail'>> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { title, description } = params;
  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  const { analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogoSmall />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screenWithProperties(analyticsScreens.IMPACT_DETAIL, {
      // impact_metric,
      project_alias: projectId,
    });
  }, []);

  // const onOrderSent = (price: number, paymentRef: string) => {
  //   navigation.navigate('AuthStack', {
  //     screen: 'BankPayment',
  //     params: { redirectPage: 'Dashboard', paymentRef, price },
  //   });
  // };

  return (
    <ItemDetailContext.Provider value={{ title, description }}>
      <ImpactDetailView />
    </ItemDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
