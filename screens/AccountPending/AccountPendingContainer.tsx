import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AccountPendingView from './AccountPendingView';
import { AccountPendingScreenProps } from '../../navigation/RootNavigatorTypes';
import NowalaText from '../../components/atoms/text';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import colors from '../../theme/colors';
import { AccountPendingCxt } from './AccountPendingContext';
import ServicesContext, { Services } from '../../services';

const { BACKGROUND } = colors;

const AccountPendingContainer: React.FC<AccountPendingScreenProps> = ({
  navigation,
}) => {
  const { auth, analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity activeOpacity={0.5}>
          <NowalaIcon />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
      headerRight: () => (
        // <MenuButton onPress={() => {}} />
        <NowalaText.LinkText style={{ marginRight: 15 }} onPress={signOut}>
          Sign out
        </NowalaText.LinkText>
      ),
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screen('Account Pending');
  }, []);

  const goToProjects = () => {
    navigation.navigate('Projects');
  };

  // Sign out
  const signOut = async () => {
    await auth.signOut();
    analytics.track('User Signed Out');
  };

  return (
    <AccountPendingCxt.Provider value={{ goToProjects }}>
      <AccountPendingView />
    </AccountPendingCxt.Provider>
  );
};

export default AccountPendingContainer;
