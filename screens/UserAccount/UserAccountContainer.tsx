import React, { useContext, useEffect, useState } from 'react';
import ServicesContext, { Services } from '../../services';
import { _getLoginError } from '../../utils/errors';
import LoginView from './UserAccountView';
import regex from '../../utils/consts/REGEX';
import { useForm } from 'react-hook-form';
import { InputFormConfig } from '../../components/organisms/InputForm/types';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';
import {
  AuthStackParamList,
  AuthStackScreenProps,
  NoAuthStackScreenProps,
} from '../../navigation/types';
import NowalaText from '../../components/atoms/text';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
import { UserAccountContext } from './UserAccountContext';
import { Alert } from 'react-native';

interface UserAccountProps extends AuthStackScreenProps<'UserAccount'> {
  user: NowalaUserProfile;
}

const UserAccountContainer: React.FC<UserAccountProps> = ({
  navigation,
  user,
}) => {
  // Get services
  const { auth, analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Account',
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

  const goToManageAccount = () => {
    navigation.navigate('ManageAccount');
  };

  return (
    <UserAccountContext.Provider
      value={{
        email: user.email,
        deleteAccount,
        initials: `${user.firstName.charAt(0)}${user.lastName.charAt(
          0,
        )}`.toUpperCase(),
        goToManageAccount,
      }}>
      <LoginView />
    </UserAccountContext.Provider>
  );
};

export default UserAccountContainer;
