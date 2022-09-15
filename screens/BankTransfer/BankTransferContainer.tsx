import { TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import BankTransferView from './BankTransferView';
import colors from '../../theme/colors';
import ServicesContext, { Services } from '../../services';
import { MainTabScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import { BankTransferContext } from './BankTransferContext';

const { BACKGROUND } = colors;

const BankTransferContainer: React.FC<MainTabScreenProps<'BankTransfer'>> = ({
  navigation,
}) => {
  const { auth, analytics } = useContext(ServicesContext) as Services;

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'left',

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

  return (
    <BankTransferContext.Provider value={{}}>
      <BankTransferView />
    </BankTransferContext.Provider>
  );
};

export default BankTransferContainer;
