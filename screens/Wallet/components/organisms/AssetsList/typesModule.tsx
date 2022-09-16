import { AssetPreview, WalletSummaryCard } from '../../../typesModule';

export interface AssetsListView {
  assets: AssetPreview[];
  walletSummary: WalletSummaryCard;
  goToAssetDetail: () => void;
  goToAssetsList: () => void;
}
