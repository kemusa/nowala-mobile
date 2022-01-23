interface DashboardContext {
  dashboardSummary: DashboardSummary;
  viewProgress: boolean;
  closeProgressModal: () => void;
}

interface StatusItem {
  title: string;
  complete: boolean;
}

interface SponsorshipData {
  asset: string;
  unitCost: number;
  units: number;
  interest: number;
  collected: number;
  currency: 'SLL';
  projectId: string;
  progress: StatusItem[];
}

interface DashboardSummary {
  investment: number;
  collected: number;
  totalReturn: number;
  returnPercent: number;
  asset: string;
  currency: string;
  units: number;
  progress: StatusItem[];
  openProgressModal: () => void;
}
