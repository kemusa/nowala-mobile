import { Timestamp } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import ServicesContext, { Services } from '../../../services';
import { ImpactDetailContext } from '../../../screens/ImpactDetail/ImpactDetailContext';
import NewOrdersModalView from './NewOrdersModalView';
import { NewOrder } from './typesExport';
import { numberWithCommas } from '../../../utils/helpers';

const NewOrderModalContainer: React.FC<NewOrderModalContainerProps> = ({
  title,
  page_ref,
  isOpen,
  onClose,
  onOrderSent,
  userId,
  projectId,
  email,
  // userTotalPrice
}) => {
  const orderLimit = 5;
  const { analytics, db } = useContext(ServicesContext) as Services;

  const [orderVolume, setOrderVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [userUnitPrice, setUserUnitPrice] = useState(0);
  const [projectUnitPrice, setProjectUnitPrice] = useState('');
  const [projectCurrency, setProjectCurrency] = useState('');
  const [userTotalPrice, setUserTotalPrice] = useState(0);

  // track screen
  useEffect(() => {
    // NewOrderModal component is rendered whenever its parent component screen is rendered
    // This checks to see if the modal is open before firing off the analytics event
    if (isOpen) {
      analytics.trackWithProperties('User Viewed Order Form', {
        ref: page_ref,
        project_alias: projectId,
      });
    }
  }, [isOpen]);

  // get latest price
  useEffect(() => {
    fetchUnitPrice();
  }, [projectId]);

  // updateTotalPrice
  useEffect(() => {
    console.log('BAR', userUnitPrice, orderVolume);

    setUserTotalPrice(orderVolume * userUnitPrice);
  }, [userUnitPrice, orderVolume]);

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
    try {
      setLoading(true);
      setTimeout(() => setOrderConfirmed(true), 1000);
      setTimeout(() => {
        onClose();
        onOrderSent();
      }, 4000);
      const order: NewOrder = {
        uid: userId,
        units: orderVolume,
        projectId: projectId,
        email,
        timestamp: Timestamp.now(),
      };
      await db.writeDocument('orders', order);
      analytics.trackWithProperties('User Placed Order', {
        ref: page_ref,
        project_alias: projectId,
        order_volume: orderVolume,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Get unit price for the project
  const fetchUnitPrice = async () => {
    const query = await db.findById(`projects/${projectId}`);
    const project = query.data as ProjectData;
    setUserUnitPrice(project.costToUser);
    setProjectUnitPrice(numberWithCommas(project.unitCost));
    setProjectCurrency(project.currency);
    console.log('FOO', orderVolume, userUnitPrice);
    setUserTotalPrice(orderVolume * userUnitPrice);
  };

  const orderConfirmBtn = {
    text: 'Request now',
    onPress: onOrder,
    disabled: orderVolume <= 0,
    loading,
  };

  return (
    <NewOrdersModalView
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      orderCounter={{ increaseNumber, decreaseNumber, number: orderVolume }}
      orderConfirmBtn={orderConfirmBtn}
      orderConfirmed={orderConfirmed}
      userTotalPrice={userTotalPrice}
      projectUnitPrice={projectUnitPrice}
      projectCurrency={projectCurrency}
    />
  );
};

export default NewOrderModalContainer;
