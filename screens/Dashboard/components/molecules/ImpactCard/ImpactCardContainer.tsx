import React, { useContext } from 'react';
import { DashboardContext } from '../../../DashboardContext';
import ImpactCardView from './ImpactCardView';

const ImpactCardContainer = () => {
  const { dashboardSummary } = useContext(DashboardContext);
  const { collected, units } = dashboardSummary;
  return <ImpactCardView collected={collected} units={units} />;
};

export default ImpactCardContainer;
