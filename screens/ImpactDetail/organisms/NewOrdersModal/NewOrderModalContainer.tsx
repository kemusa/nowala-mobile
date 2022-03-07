import React, { useContext, useState } from 'react';
import ServicesContext, { Services } from '../../../../services';
import { ImpactDetailContext } from '../../ImpactDetailContext';
import NewOrdersModalView from './NewOrdersModalView';

const NewOrderModalContainer: React.FC<NewOrderModalContainerProps> = ({
  title,
}) => {
  const orderLimit = 5;
  const { analytics, db } = useContext(ServicesContext) as Services;
  const {
    viewNewOrder,
    closeNewOrderModal,
    goToDashboard,
    userId,
    projectAlias,
    projectId,
    email,
  } = useContext(ImpactDetailContext);
  const [orderVolume, setOrderVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const increaseNumber = () => {
    if (orderVolume < orderLimit) {
      setOrderVolume(num => num + 1);
    }
  };
  const decreaseNumber = () => {
    if (orderVolume > 0) {
      setOrderVolume(num => num - 1);
    }
  };

  const onOrder = async () => {
    setLoading(true);
    setTimeout(() => setOrderConfirmed(true), 1000);
    setTimeout(() => {
      closeNewOrderModal();
      goToDashboard();
    }, 4000);
    const order: NewOrder = {
      uid: userId,
      units: orderVolume,
      projectId: projectId,
      alias: projectAlias,
      email,
    };
    await db.writeDocument('orders', order);
  };

  const orderConfirmBtn = {
    text: 'Order items',
    onPress: onOrder,
    disabled: orderVolume <= 0,
    loading,
  };

  return (
    <NewOrdersModalView
      title={title}
      isOpen={viewNewOrder}
      onClose={closeNewOrderModal}
      orderCounter={{ increaseNumber, decreaseNumber, number: orderVolume }}
      orderConfirmBtn={orderConfirmBtn}
      orderConfirmed={orderConfirmed}
    />
  );
};

export default NewOrderModalContainer;
