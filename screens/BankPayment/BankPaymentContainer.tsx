import React, { useState } from 'react';
import { AuthStackScreenProps } from '../../navigation/types';
import BankPaymentView from './BankPaymentView';

const BankPaymentContainer: React.FC<AuthStackScreenProps<'BankPayment'>> = ({
  navigation,
  route,
}) => {
  const { redirectPage, paymentRef, price } = route.params;

  const [viewBankSelect, setViewBankSelect] = useState(false);

  const openBankSelect = () => {
    setViewBankSelect(true);
  };

  const onBankSelectClose = () => {
    setViewBankSelect(false);
  };

  const redirect = () => {
    navigation.navigate(redirectPage);
  };

  return (
    <BankPaymentView
      onBankSelectClose={onBankSelectClose}
      openBankSelect={openBankSelect}
      viewBankSelect={viewBankSelect}
      redirect={redirect}
      paymentRef={paymentRef}
      price={price}
    />
  );
};

export default BankPaymentContainer;
