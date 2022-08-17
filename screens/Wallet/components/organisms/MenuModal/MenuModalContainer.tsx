import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WalletCtx } from '../../../WalletContext';
import OptionsModalView from './MenuModalModalView';

const OptionsModalContainer: React.FC = () => {
  const { menuModalOpen, closeMenuModal, signOut } = useContext(WalletCtx);
  return (
    <OptionsModalView
      isOpen={menuModalOpen}
      onClose={closeMenuModal}
      signOut={signOut}
    />
  );
};

export default OptionsModalContainer;
