import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WalletCtx } from '../../../WalletContext';
import WithdrawlModalView from './WithdrawlModalModalView';

const WithdrawlModalContainer: React.FC = () => {
  const { viewWithdrawlGuide, closeWithdrawlModal } = useContext(WalletCtx);
  return (
    <WithdrawlModalView
      isOpen={viewWithdrawlGuide}
      onClose={closeWithdrawlModal}
    />
  );
};

export default WithdrawlModalContainer;
