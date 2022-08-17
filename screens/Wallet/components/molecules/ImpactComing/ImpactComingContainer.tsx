import React, { useContext } from 'react';
import { WalletCtx } from '../../../WalletContext';
import ImpactComingView from './ImpactComingView';

const ImpactComingContainer = () => {
  const {} = useContext(WalletCtx);
  // const { units, progress } = dashboardSummary;
  // const { installed } = progress;
  return (
    <ImpactComingView units={0} installed={true} openProgressModal={() => {}} />
  );
};

export default ImpactComingContainer;
