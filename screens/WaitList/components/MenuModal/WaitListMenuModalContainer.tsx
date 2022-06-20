import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WaitlistContext } from '../../WaitlistContext';
import WaitListMenuModalView from './WaitListMenuModalView';

const WaitListMenuModalContainer: React.FC = () => {
  const { menuModalOpen, closeMenuModal, signOut } =
    useContext(WaitlistContext);
  return (
    <WaitListMenuModalView
      isOpen={menuModalOpen}
      onClose={closeMenuModal}
      signOut={signOut}
    />
  );
};

export default WaitListMenuModalContainer;
