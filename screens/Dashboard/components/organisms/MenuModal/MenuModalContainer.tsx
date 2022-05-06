import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DashboardContext } from '../../../DashboardContext';
import OptionsModalView from './MenuModalModalView';

const OptionsModalContainer: React.FC = () => {
  const { menuModalOpen, closeMenuModal, goToYourOrders, signOut } =
    useContext(DashboardContext);
  return (
    <OptionsModalView
      isOpen={menuModalOpen}
      onClose={closeMenuModal}
      openOrdersModal={goToYourOrders}
      signOut={signOut}
    />
  );
};

export default OptionsModalContainer;
