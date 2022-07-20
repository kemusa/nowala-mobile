import React, { useContext } from 'react';
import { DashboardContext } from '../../../../ImpactContext';
import ImpactCardView from './ImpactMetricCardView';

const ImpactBreakdownContainer: React.FC<ImpactMetricCardProps> = ({
  metric,
  detail,
}) => {
  const { goToImpactDetail } = useContext(DashboardContext);

  return (
    <ImpactCardView
      goToImpactDetail={goToImpactDetail}
      metric={metric}
      detail={detail}
    />
  );
};

export default ImpactBreakdownContainer;
