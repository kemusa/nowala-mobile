import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DashboardContext } from '../../../DashboardContext';
import ProgressModalView from './ProgressModalView';

const ProgressModalContainer: React.FC = () => {
  const { dashboardSummary, viewProgress, closeProgressModal } =
    useContext(DashboardContext);
  const { progress } = dashboardSummary;
  return (
    <ProgressModalView
      progress={progress}
      isOpen={viewProgress}
      onClose={closeProgressModal}
    />
  );
};

export default ProgressModalContainer;
