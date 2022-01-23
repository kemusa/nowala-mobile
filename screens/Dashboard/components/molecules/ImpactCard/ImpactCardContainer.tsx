import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactCardView from './ImpactCardView';

const ImpactCardContainer = () => {
  const { dashboardSummary } = useContext(DashboardContext);
  const { collected, units, progress, openProgressModal } = dashboardSummary;
  return (
    <ImpactCardView
      collected={collected}
      units={units}
      progress={progress}
      openProgressModal={openProgressModal}
    />
  );
};

export default ImpactCardContainer;
