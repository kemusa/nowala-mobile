import React, { useContext, useEffect } from 'react';
import ServicesContext, { Services } from '../../../../../services';
import { WalletCtx } from '../../../WalletContext';
import AssetListView from './AssetListView';

const AssetListContainer = () => {
  const {
    assets,
    walletSummary,
    goToAssetDetail,
    goToAssetsList,
    user,
    openTopUpModal,
  } = useContext(WalletCtx);

  return (
    <AssetListView
      assets={assets}
      walletSummary={walletSummary}
      goToAssetDetail={goToAssetDetail}
      goToAssetsList={goToAssetsList}
      openTopUpModal={openTopUpModal}
    />
  );
};

export default AssetListContainer;
