import React, { useContext } from 'react';
import { DashboardContext } from '../../../ImpactContext';
import ImpactBreakdownView from './ImpactBreakdownView';

const ImpactBreakdownContainer = () => {
  const { dashboardSummary, openProgressModal, goToImpactDetail } =
    useContext(DashboardContext);
  const { impactMetrics, collected } = dashboardSummary;

  return (
    <ImpactBreakdownView
      collected={collected}
      openProgressModal={openProgressModal}
      impactMetrics={impactMetrics}
      goToImpactDetail={goToImpactDetail}
    />
  );
};

export default ImpactBreakdownContainer;
