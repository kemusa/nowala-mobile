import React, { useContext, useState } from 'react';
import { ImpactDetailContext } from '../../ImpactDetailContext';
import NewOrdersModalView from './NewOrdersModalView';

const NewOrderModalContainer: React.FC<NewOrderModalContainerProps> = ({
  title,
}) => {
  const orderLimit = 5;
  const { viewNewOrder, closeNewOrderModal } = useContext(ImpactDetailContext);
  const [orderVolume, setOrderVolume] = useState(1);

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

  return (
    <NewOrdersModalView
      title={title}
      isOpen={viewNewOrder}
      onClose={closeNewOrderModal}
      orderCounter={{ increaseNumber, decreaseNumber, number: orderVolume }}
    />
  );
};

export default NewOrderModalContainer;
