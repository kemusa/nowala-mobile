import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactBreakdownView from './ImpactBreakdownView';

const ImpactBreakdownContainer = () => {
  const { dashboardSummary, openProgressModal, goToImpactDetail } =
    useContext(DashboardContext);
  const { impactMetrics } = dashboardSummary;

  return (
    <ImpactBreakdownView
      openProgressModal={openProgressModal}
      impactMetrics={impactMetrics}
      goToImpactDetail={goToImpactDetail}
    />
  );
};

export default ImpactBreakdownContainer;
