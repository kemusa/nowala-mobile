import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WalletCtx } from '../../../screens/Wallet/WalletContext';
import OptionsModalView from './MenuModalModalView';

const MenuModalContainer: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  signOut,
  goToAccount,
}) => {
  return (
    <OptionsModalView
      isOpen={isOpen}
      onClose={onClose}
      signOut={signOut}
      goToAccount={goToAccount}
    />
  );
};

export default MenuModalContainer;
