import React, { useContext, useEffect, useState } from 'react';
import { AssetDetailCtx } from './AssetDetailContext';
import ImpactDetailView from './AssetDetailView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';

const ImpactDetailContainer: React.FC<AuthStackScreenProps<'AssetDetail'>> = ({
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
    analytics.screen(analyticsScreens.ASSET_ITEM_DETAIL);
  }, []);

  return (
    <AssetDetailCtx.Provider value={{}}>
      <ImpactDetailView />
    </AssetDetailCtx.Provider>
  );
};

export default ImpactDetailContainer;
