interface ImpactBreakdownProps {
  impactMetrics?: ImpactMetrics;
  collected: number;
  openProgressModal: () => void;
  goToImpactDetail: ImpactDetailNavProp;
}
interface ImpactContent {
  carbonOffset: ImpactDetail;
  lightHours: ImpactDetail;
  keroseneReduced: ImpactDetail;
  peopleImpacted: ImpactDetail;
}
