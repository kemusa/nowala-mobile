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
}

export interface WalletSummary {
  total: number;
  activeMoney: number;
  profit: number;
  profitPercent: number;
  // assets: AssetPreview[];
  currency: '£';
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
  openMenuModal: () => void;
  closeMenuModal: () => void;
  closeWithdrawlModal: () => void;
  openWithdrawlModal: () => void;
  signOut: () => void;
}
