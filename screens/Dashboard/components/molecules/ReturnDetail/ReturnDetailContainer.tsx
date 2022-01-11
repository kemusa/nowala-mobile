import React, { useEffect, useState } from 'react';
import ReturnDetailView from './ReturnDetailView';

const ReturnDetailContainer: React.FC<ReturnDetail> = ({
  currency,
  number,
  description,
}) => {
  const [initNum, setInitNum] = useState(0);

  useEffect(() => {
    setTimeout(() => setInitNum(number), 300);
  }, []);

  return (
    <ReturnDetailView
      currency={currency}
      number={initNum}
      description={description}
    />
  );
};

export default ReturnDetailContainer;
