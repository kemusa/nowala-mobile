import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import WaitListView from './WaitListView';
import NowalaText from '../../components/atoms/text';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import colors from '../../theme/colors';
import ServicesContext, { Services } from '../../services';
import {
  MainTabScreenProps,
  RootStackScreenProps,
} from '../../navigation/types';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuButton from '../../components/atoms/buttons/MenuButton';
import { WaitlistContext } from './WaitlistContext';

const { BACKGROUND } = colors;

const WaitListContainer: React.FC<MainTabScreenProps<'Account'>> = ({
  navigation,
}) => {
  const { auth, analytics } = useContext(ServicesContext) as Services;
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'left',
      headerRight: () => (
        <TouchableOpacity onPress={openMenuModal}>
          <Ionicons size={40} color={'#fff'} name="menu" />
        </TouchableOpacity>
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

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

  // Sign out
  const signOut = async () => {
    await auth.signOut();
    analytics.track(analyticsEvents.SIGNED_OUT);
  };

  return (
    <WaitlistContext.Provider
      value={{
        menuModalOpen,
        closeMenuModal,
        signOut,
      }}>
      <WaitListView />
    </WaitlistContext.Provider>
  );
};

export default WaitListContainer;
