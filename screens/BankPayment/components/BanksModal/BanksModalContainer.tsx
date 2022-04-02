import { Timestamp } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import BanksModalView from './BanksModalView';

const BankModalContainer: React.FC<BankModalContainerProps> = ({
  isOpen,
  onClose,
}) => {
  const orderLimit = 5;

  const [orderVolume, setOrderVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [userUnitPrice, setUserUnitPrice] = useState(0);
  const [projectUnitPrice, setProjectUnitPrice] = useState('');
  const [projectCurrency, setProjectCurrency] = useState('');
  const [userTotalPrice, setUserTotalPrice] = useState(0);

  return <BanksModalView isOpen={isOpen} onClose={onClose} />;
};

export default BankModalContainer;
