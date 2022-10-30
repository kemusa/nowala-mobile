import React, { useContext, useEffect, useState } from 'react';
import UpdateAppView from './UpdateAppView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';
import { Linking, Platform } from 'react-native';

const UpdateAppContainer: React.FC<AuthStackScreenProps<'UpdateApp'>> = ({
  navigation,
  route,
}) => {
  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  const { analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogoSmall />,
      headerLeft: () => null,
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
    analytics.screen(analyticsScreens.UPDATE_APP);
  }, []);

  const goToAppStore = () => {
    Platform.OS === 'ios'
      ? Linking.openURL(
          'https://apps.apple.com/gb/app/nowala-sustainable-investing/id1605000796',
        )
      : Linking.openURL(
          'https://play.google.com/store/apps/details?id=io.nowala.sponsors',
        );
  };

  return <UpdateAppView goToAppStore={goToAppStore} />;
};

export default UpdateAppContainer;
