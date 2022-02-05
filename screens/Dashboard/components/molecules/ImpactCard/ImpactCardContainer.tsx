import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactCardView from './ImpactCardView';

const ImpactCardContainer = () => {
  const { dashboardSummary, openProgressModal } = useContext(DashboardContext);
  const { units, progress } = dashboardSummary;
  const { installed } = progress;
  return (
    <ImpactCardView
      units={units}
      installed={installed}
      openProgressModal={openProgressModal}
    />
  );
};

export default ImpactCardContainer;
