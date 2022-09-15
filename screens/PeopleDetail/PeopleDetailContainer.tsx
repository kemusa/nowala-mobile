import React, { useContext, useEffect, useState } from 'react';
import { PeopleDetailCtx } from './PeopleDetailContext';
import PeopleDetailView from './PeopleDetailView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';

const PeopleDetailContainer: React.FC<AuthStackScreenProps<'ItemDetail'>> = ({
  navigation,
  route,
}) => {
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
    analytics.screenWithProperties(analyticsScreens.ASSET_ITEM_DETAIL, {
      project_alias: projectId,
    });
  }, []);

  return (
    <PeopleDetailCtx.Provider value={{}}>
      <PeopleDetailView />
    </PeopleDetailCtx.Provider>
  );
};

export default PeopleDetailContainer;
