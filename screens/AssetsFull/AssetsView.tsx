import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { AssetDetailCtx } from './AssetsContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NewOrderModal from '../../components/organisms/NewOrdersModal';
import { AssetsListView } from '../Wallet/components/organisms/AssetsList/typesModule';
import { AssetsView } from './typesModule';
import AssetItem from '../Wallet/components/organisms/AssetsList/AssetItem';
import { productMap } from '../../utils/consts/DATA';
import CardWrapper from '../../components/templates/CardWrapper';
import CardLongList from '../../components/templates/CardLongList';

const AssetDetailView: React.FC<AssetsView> = ({ assets, goToAssetDetail }) => {
  const iconSize = 45;
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
          onPress={goToAssetDetail}
          title={productMap[a.alias].title}
          repaid={Math.round((a.repaid / (a.units * a.unitCost)) * 100)}
          units={a.units}
          iconWidth={iconSize}
          maturity={a.maturity || 'TBD'} //todo: trasform date to pending if maturity is undefined
        />
      ))
    : [];

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: '#fff' }]}>
      <ScrollView>
        <View style={{ marginTop: 50, padding: 10 }}>
          <CardWrapper title="Assets" type="primary" ctaText={'See all'}>
            <CardLongList list={list} />
          </CardWrapper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssetDetailView;
