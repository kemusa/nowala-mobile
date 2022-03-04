interface ImpactBreakdownProps {
  impactMetrics?: ImpactMetrics;
  openProgressModal: () => void;
  goToImpactDetail: ImpactDetailNavProp;
}
interface ImpactContent {
  carbonOffset: ImpactDetail;
  lightHours: ImpactDetail;
  kerosineReduced: ImpactDetail;
  peopleImpacted: ImpactDetail;
}
