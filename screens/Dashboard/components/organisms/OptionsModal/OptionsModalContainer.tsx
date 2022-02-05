import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DashboardContext } from '../../../DashboardContext';
import OptionsModalView from './OptionsModalView';

const OptionsModalContainer: React.FC = () => {
  const { viewOptions, closeOptionsModal, goToProject, goToYourOrders } =
    useContext(DashboardContext);
  return (
    <OptionsModalView
      isOpen={viewOptions}
      onClose={closeOptionsModal}
      goToProject={goToProject}
      openOrdersModal={goToYourOrders}
    />
  );
};

export default OptionsModalContainer;
