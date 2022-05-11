import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AccountPendingView from './AccountPendingView';
import NowalaText from '../../components/atoms/text';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import colors from '../../theme/colors';
import { AccountPendingCxt } from './AccountPendingContext';
import ServicesContext, { Services } from '../../services';
import { MainTabScreenProps } from '../../navigation/types';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';

const { BACKGROUND } = colors;

interface AccountPendingProps extends MainTabScreenProps<'Account'> {
  user: NowalaUserData;
}

const AccountPendingContainer: React.FC<AccountPendingProps> = ({
  navigation,
  user,
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
    analytics.screen(analyticsScreens.ACCOUNT_PENDING);
  }, []);

  const goToProjects = () => {
    navigation.navigate('Projects');
  };

  // Sign out
  const signOut = async () => {
    await auth.signOut();
    analytics.track(analyticsEvents.SIGNED_OUT);
  };

  return (
    <AccountPendingCxt.Provider value={{ goToProjects, user }}>
      <AccountPendingView />
    </AccountPendingCxt.Provider>
  );
};

export default AccountPendingContainer;
