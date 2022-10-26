import { Timestamp } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ServicesContext, { Services } from '../../../services';
import NewOrdersModalView from './NewOrdersModalView';
import { NewOrder } from './typesExport';
import { numberWithCommas } from '../../../utils/helpers';

const NewOrderModalContainer: React.FC<NewOrderModalContainerProps> = ({
  title,
  pageRef,
  isOpen,
  onClose,
  onOrderSent,
  user,
  // userId,
  projectId,
  // email,
  // firstName,
}) => {
  // const orderLimit = 10;
  const { analytics, db } = useContext(ServicesContext) as Services;

  const [orderVolume, setOrderVolume] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [unitPrice, setUnitPrice] = useState(0);
  const [units, setUnits] = useState(0);
  const [topUpValue, setTopUpValue] = useState(100);
  const projectUnitPrice = useRef<number>(0);
  const [projectCurrency, setProjectCurrency] = useState('');
  // const [userTotalPrice, setUserTotalPrice] = useState(0);
  const [projectTotalPrice, setProjectTotalPrice] = useState('');
  const [orderRef, setOrderRef] = useState('');
  const [input, setInput] = useState('');
  const inputRef = useRef('');

  // track screen
  useEffect(() => {
    // NewOrderModal component is rendered whenever its parent component screen is rendered
    // This checks to see if the modal is open before firing off the analytics event
    if (isOpen) {
      analytics.trackWithProperties('User Viewed Order Form', {
        ref: pageRef,
        project_alias: projectId,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (user.email) {
      const userSub = user.email.substring(0, 3);
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setOrderRef(`${userSub}-${randNum}`);
    }
  }, [user]);

  // get latest price
  useEffect(() => {
    fetchUnitPrice();
  }, [projectId]);

  // update potential units ordered
  useEffect(() => {
    const u = parseInt(input) / unitPrice || 0;
    setUnits(Math.floor(u));
  }, [unitPrice, input]);

  // const increaseNumber = () => {
  //   // if (orderVolume < orderLimit) {
  //   setOrderVolume(num => num + 1);
  //   // }
  // };
  // const decreaseNumber = () => {
  //   if (orderVolume > 0) {
  //     setOrderVolume(num => num - 1);
  //   }
  // };

  const onOrder = async () => {
    try {
      setLoading(true);
      setTimeout(() => setOrderConfirmed(true), 1000);
      setTimeout(() => {
        onClose();
        setOrderConfirmed(false);
        setLoading(false);
        onOrderSent(parseInt(input), orderRef);
      }, 4000);
      const order: NewOrder = {
        uid: user.userId,
        unitPrice: unitPrice,
        total: parseInt(input),
        units: orderVolume,
        currency: '£',
        projectId: projectId,
        email: user.email,
        orderRef,
        firstName: user.firstName,
        timestamp: Timestamp.now(),
        waitlist: true,
      };
      await db.writeDocument('orders', order);
      await db.updateDocument('users', user.userId, { hasOrdered: true });
      analytics.trackWithProperties('User Placed Order', {
        ref: pageRef,
        project_alias: projectId,
        order_volume: orderVolume,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Get unit price for the project
  const fetchUnitPrice = async () => {
    try {
      const query = await db.findById(`projects/${projectId}`);
      const project = query.data as ProjectData;
      setUnitPrice(project.costToUser);
      setInput(project.costToUser.toString());
      // orderRef
      setProjectTotalPrice(numberWithCommas(project.unitCost * orderVolume));
      setProjectCurrency(project.currency);
      // setUserTotalPrice(orderVolume * project.costToUser);
    } catch (error) {
      console.error(error);
    }
  };

  const orderConfirmBtn = {
    text: 'Continue',
    onPress: onOrder,
    disabled: orderVolume <= 0,
    loading,
  };

  const handleValueChange = (value: string) => {
    setInput(value);
  };

  return (
    <NewOrdersModalView
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      handleValueChange={handleValueChange}
      inputRef={inputRef}
      input={input}
      units={units}
      // orderCounter={{ increaseNumber, decreaseNumber, number: orderVolume }}
      unitPrice={unitPrice}
      orderConfirmBtn={orderConfirmBtn}
      orderConfirmed={orderConfirmed}
      // userTotalPrice={userTotalPrice}
      projectTotalPrice={projectTotalPrice}
      projectCurrency={projectCurrency}
    />
  );
};

export default NewOrderModalContainer;
