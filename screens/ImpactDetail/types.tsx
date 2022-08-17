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
  impact_metric: string;
}

interface ImpactDetailContext {
  impactDetail: ImpactDetail;
  openNewOrderModal: () => void;
  closeNewOrderModal: () => void;
  // onOrderSent: OrderCallback;
  viewNewOrder: boolean;
  userId: string;
  projectId: string;
  email: string;
  firstName: string;
}
