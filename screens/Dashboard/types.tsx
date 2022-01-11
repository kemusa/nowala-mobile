interface DashboardContext {
  checklist: CheckListItemProps[];
  dashboardSummary: DashboardSummary;
}

interface DashboardSummary {
  investment: number;
  collected: number;
  totalReturn: number;
  returnPercent: number;
  asset: string;
  currency: string;
}
