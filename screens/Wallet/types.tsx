interface DashboardContext {
  walletSummary: WalletSummaryCard;
  viewWithdrawlGuide: boolean;
  menuModalOpen: boolean;
  openMenuModal: () => void;
  closeMenuModal: () => void;
  closeWithdrawlModal: () => void;
  openWithdrawlModal: () => void;
  signOut: () => void;
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

interface WalletSummary {
  total: number;
  activeMoney: number;
  inactiveMoney: number;
}

interface WalletSummaryCard extends WalletSummary {
  activePercent: number;
  inactivePercent: number;
}

interface OrderData {
  date: string;
  units: number;
  investment: string;
  currency: string;
  paid: PaidData;
  assetTitle: string;
}
