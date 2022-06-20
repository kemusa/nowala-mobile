import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DashboardContext } from '../../../DashboardContext';
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
