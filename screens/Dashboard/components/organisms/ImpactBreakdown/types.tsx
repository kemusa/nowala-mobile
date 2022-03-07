interface ImpactBreakdownProps {
  impactMetrics?: ImpactMetrics;
  openProgressModal: () => void;
  goToImpactDetail: ImpactDetailNavProp;
}
interface ImpactContent {
  carbonOffset: ImpactDetail;
  lightHours: ImpactDetail;
<<<<<<< Updated upstream
  kerosineReduced: ImpactDetail;
=======
  moneySaved: ImpactDetail;
>>>>>>> Stashed changes
  peopleImpacted: ImpactDetail;
}
