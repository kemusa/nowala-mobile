import React, { useContext, useEffect, useState } from 'react';
import { AuthStackScreenProps } from '../../navigation/types';
import ServicesContext, { Services } from '../../services';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
import BankPaymentView from './BankPaymentView';

const BankPaymentContainer: React.FC<AuthStackScreenProps<'BankPayment'>> = ({
  navigation,
  route,
}) => {
  const { redirectPage, paymentRef, price } = route.params;
  const { analytics } = useContext(ServicesContext) as Services;

  const [viewBankSelect, setViewBankSelect] = useState(false);

  useEffect(() => {
    analytics.screen(analyticsScreens.BANK_PAYMENT);
  }, []);

  const openBankSelect = () => {
    setViewBankSelect(true);
    analytics.track(analyticsEvents.VIEWS_BANK_OPTIONS);
  };

  const onBankSelectClose = () => {
    setViewBankSelect(false);
  };

  const redirect = (hasPaid: boolean) => {
    navigation.navigate('Main', { screen: redirectPage });
    // If user has confirmed a payment, send one event. If not, send another
    analytics.track(
      hasPaid
        ? analyticsEvents.CONFIRMS_TRANSFER
        : analyticsEvents.SELECTS_PAY_LATER,
    );
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
