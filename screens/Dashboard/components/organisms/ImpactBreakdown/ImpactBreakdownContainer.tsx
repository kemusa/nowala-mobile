import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactBreakdownView from './ImpactBreakdownView';

const ImpactBreakdownContainer = () => {
  const { dashboardSummary, openProgressModal } = useContext(DashboardContext);
  const { units, progress, impactMetrics } = dashboardSummary;
  const { installed } = progress;
  return (
    <ImpactBreakdownView
      units={units}
      installed={installed}
      openProgressModal={openProgressModal}
      impactMetrics={impactMetrics}
    />
  );
};

export default ImpactBreakdownContainer;
