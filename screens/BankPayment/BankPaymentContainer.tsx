import React, { useState } from 'react';
import { BankPaymentScreenProps } from '../../navigation/RootNavigatorTypes';
import BankPaymentView from './BankPaymentView';

const BankPaymentContainer: React.FC<BankPaymentScreenProps> = ({
  navigation,
  route,
}) => {
  const { redirectPage } = route.params;

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
    />
  );
};

export default BankPaymentContainer;
