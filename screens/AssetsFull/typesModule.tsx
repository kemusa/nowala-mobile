import { AssetPreview } from '../Wallet/typesModule';

export interface AssetsView {
  assets: AssetPreview[];
  goToAssetDetail: () => void;
}
