import { Timestamp } from 'firebase/firestore';
import React from 'react';
import BanksModalView from './BanksModalView';

const BankModalContainer: React.FC<BankModalContainerProps> = ({
  isOpen,
  onClose,
}) => {
  return <BanksModalView isOpen={isOpen} onClose={onClose} />;
};

export default BankModalContainer;
