import { Timestamp } from 'firebase/firestore';

// Data in from Firebase in the user's sponsorship collection
export interface SponsorshipData {
  asset: string;
  unitCost: number;
  units: number;
  interest: number;
  collected: number;
  currency: 'SLL';
  projectId: string;
  status: SponsorStatus;
  orderDate: Timestamp;
  paid: PaidData;
}

export interface WalletSummaryData {
  total: number;
  activeMoney: number;
  profit: number;
  profitPercent: number;
  assets: AssetPreviewData[];
  currency: '£';
  waitlistNum: number;
}

export interface WalletSummaryCard extends WalletSummary {
  inactiveMoney: number;
  activePercent: number;
  inactivePercent: number;
}

export interface AssetPreviewData {
  alias: 'solar_kits_ignite_power_sl';
  units: number;
  maturity: Timestamp;
  unitCost: number;
  repaid: number;
  orderNum: number;
}

export interface AssetPreview {
  alias: 'solar_kits_ignite_power_sl';
  units: number;
  maturity: string | undefined;
  unitCost: number;
  repaid: number;
  installed: boolean;
}

export interface WalletContext {
  walletSummary: WalletSummaryCard;
  viewWithdrawlGuide: boolean;
  menuModalOpen: boolean;
  assets: AssetPreview[];
  topUpModalOpen: boolean;
  user: NowalaUserProfile;
  handleOrder: (price: number, paymentRef: string) => void;
  openMenuModal: () => void;
  closeMenuModal: () => void;
  openTopUpModal: () => void;
  closeTopUpModal: () => void;
  closeWithdrawlModal: () => void;
  openWithdrawlModal: () => void;
  goToActiveCash: () => void;
  goToBuyingPower: () => void;
  goToProfit: () => void;
  signOut: () => void;
  goToUserAccount: () => void;
  goToAssetDetail: () => void;
  goToAssetsList: () => void;
}
