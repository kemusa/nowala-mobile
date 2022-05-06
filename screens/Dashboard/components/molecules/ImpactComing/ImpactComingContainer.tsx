import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactComingView from './ImpactComingView';

const ImpactComingContainer = () => {
  const { dashboardSummary, openProgressModal } = useContext(DashboardContext);
  const { units, progress } = dashboardSummary;
  const { installed } = progress;
  return (
    <ImpactComingView
      units={units}
      installed={installed}
      openProgressModal={openProgressModal}
    />
  );
};

export default ImpactComingContainer;
