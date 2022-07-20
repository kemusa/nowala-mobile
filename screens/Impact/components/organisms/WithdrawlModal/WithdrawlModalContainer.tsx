import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DashboardContext } from '../../../ImpactContext';
import WithdrawlModalView from './WithdrawlModalModalView';

const WithdrawlModalContainer: React.FC = () => {
  const { viewWithdrawlGuide, closeWithdrawlModal } =
    useContext(DashboardContext);
  return (
    <WithdrawlModalView
      isOpen={viewWithdrawlGuide}
      onClose={closeWithdrawlModal}
    />
  );
};

export default WithdrawlModalContainer;
