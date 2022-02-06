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
}

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

interface DashboardSummary {
  investment: number;
  collected: number;
  totalReturn: number;
  returnPercent: number;
  assetTitle: string;
  currency: string;
  units: number;
  progress: SponsorStatus;
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
