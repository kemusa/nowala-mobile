import React, { useContext, useEffect, useState } from 'react';
import ServicesContext, { Services } from '../../services';
import { _getLoginError } from '../../utils/errors';
import LoginView from './ManageAccountView';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import { ManageAccountContext } from './ManageAccountContext';
import { Alert } from 'react-native';

interface ManageAccountProps extends AuthStackScreenProps<'ManageAccount'> {
  user: NowalaUserProfile;
}

const ManageAccountContainer: React.FC<ManageAccountProps> = ({
  navigation,
  user,
}) => {
  // Get services
  const { auth, analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Manage account',
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
    analytics.screen(analyticsScreens.USER_ACCOUNT);
  }, []);

  const deleteAccount = async () => {
    Alert.alert(
      'Are you sure?',
      'Your account will be permentantly deleted and any funds in your account will be lost',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        { text: "I'm sure", onPress: () => auth.deleteUser() },
      ],
    );
    // await auth.deleteUser();
  };

  return (
    <ManageAccountContext.Provider
      value={{
        deleteAccount,
      }}>
      <LoginView />
    </ManageAccountContext.Provider>
  );
};

export default ManageAccountContainer;
