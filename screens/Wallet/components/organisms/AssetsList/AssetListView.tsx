import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardLongList from '../../../../../components/templates/CardLongList';
import AssetItem from './AssetItem';
import { productMap } from '../../../../../utils/consts/DATA';
import { WalletCtx } from '../../../WalletContext';
import styles from './styles';
import TopUpCard from '../TopUpCard';
import WaitListCard from '../WaitListCard';
import { AssetsListView } from './typesModule';

const AssetListView: React.FC<AssetsListView> = ({
  assets,
  walletSummary,
  goToAssetDetail,
  goToAssetsList,
  openTopUpModal,
}) => {
  const iconSize = 45;
  const { total } = walletSummary;
  const list = assets
    ? assets.map(a => (
        <AssetItem
          icon={
            <Image
              style={{ height: iconSize, width: iconSize }}
              source={{
                uri: productMap[a.alias].iconUri,
              }}
            />
          }
          title={productMap[a.alias].title}
          repaid={Math.round((a.repaid / (a.units * a.unitCost)) * 100)}
          units={a.units}
          iconWidth={iconSize}
          maturity={a.maturity || 'TBD'} //todo: trasform date to pending if maturity is undefined
          onPress={goToAssetDetail}
        />
      ))
    : [];
  return (
    <>
      {total > 0 ? (
        assets.length > 0 ? (
          <CardWrapper
            type="primary"
            title="Assets"
            cta={goToAssetsList}
            ctaText={'See all'}>
            <CardLongList list={list} />
          </CardWrapper>
        ) : (
          <WaitListCard />
        )
      ) : (
        <TopUpCard openTopUpModal={openTopUpModal} />
      )}
    </>
  );
};

export default AssetListView;
