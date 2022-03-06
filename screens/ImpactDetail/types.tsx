interface ImpactDetail {
  metricTitle: string;
  backgroundColor: string;
  contextText: string;
  title: string;
  timePeriodText?: string;
  imagePath: string;
  impactExamplesHeading: string;
  impactExamples: string[];
  ctaText: string;
  projectId: string;
}

interface ImpactDetailContext {
  impactDetail: ImpactDetail;
  openNewOrderModal: () => void;
  closeNewOrderModal: () => void;
  viewNewOrder: boolean;
}
