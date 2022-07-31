import React, { useEffect, useState } from 'react';
import ReturnDetailView from './ReturnDetailView';

const ReturnDetailContainer: React.FC<ReturnDetail> = ({
  currency,
  number,
  description,
}) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setTimeout(() => setNum(number), 300);
  }, [number]);

  return (
    <ReturnDetailView
      currency={currency}
      number={num}
      description={description}
    />
  );
};

export default ReturnDetailContainer;
