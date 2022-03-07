interface DashboardContext {
  dashboardSummary: DashboardSummary;
  viewProgress: boolean;
  viewOptions: boolean;
  viewOrders: boolean;
  openProgressModal: () => void;
  closeProgressModal: () => void;
  closeOptionsModal: () => void;
  closeOrdersModal: () => void;
  goToProject: () => void;
  goToYourOrders: () => void;
  goToImpactDetail: ImpactDetailNavProp;
}

type ImpactDetailNavProp = (impactDetail: ImpactDetail) => void;

type FBtime = { seconds: number; nanoseconds: number };
interface SponsorStatus {
  registered: boolean;
  paid: boolean;
  transferred: boolean;
  installed: boolean;
  collectionStarted: boolean;
}

interface PaidData {
  currency: '£';
  unitCost: number;
}

interface ImpactMetrics {
  carbonOffset: number;
  lightHours: number;
  moneySaved: number;
  peopleImpacted: number;
}
interface DashboardSummary {
  investment: number;
  collected: number;
  totalReturn: number;
  returnPercent: number;
  assetTitle: string;
  currency: string;
  units: number;
  progress: SponsorStatus;
  impactMetrics?: ImpactMetrics;
  openOptionsModal: () => void;
}

interface OrderData {
  date: string;
  units: number;
  investment: string;
  currency: string;
  paid: PaidData;
  assetTitle: string;
}
interface StatusItem {
  title: string;
  complete: boolean;
}
interface StatusText {
  registered: string;
  paid: string;
  transferred: string;
  installed: string;
  collectionStarted: string;
}

// interface OrderData {
//   orderDate: FBtime;
//   units: number;
//   investment: string;
//   currency: string;
//   paid: PaidData;
//   assetTitle: string;
// }
