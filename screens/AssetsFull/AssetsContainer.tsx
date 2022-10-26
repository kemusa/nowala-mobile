import React, { useContext, useEffect, useState } from 'react';
import { AssetDetailCtx } from './AssetsContext';
import AssetsView from './AssetsView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';
import { AssetPreview, AssetPreviewData } from '../Wallet/typesModule';
import { SnapshotData } from '../../services/types';
import moment from 'moment';
import { WalletCtx } from '../Wallet/WalletContext';

interface AssetsProps extends AuthStackScreenProps<'Assets'> {
  user: NowalaUserProfile;
}

const AssetsContainer: React.FC<AssetsProps> = ({ navigation, user }) => {
  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  const { db, analytics } = useContext(ServicesContext) as Services;
  const [assets, setAssets] = useState([] as AssetPreview[]);

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogoSmall />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screenWithProperties(analyticsScreens.ASSET_ITEM_DETAIL, {
      project_alias: projectId,
    });
  }, []);

  // // Listener for people list data
  // useEffect(() => {
  //   if (user.userId) {
  //     const unsubscribe = db.subscribe(
  //       `users/${user.userId}/assets`,
  //       handleAssetList,
  //     );
  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, [user]);

  // Listener for people list data
  useEffect(() => {
    if (user.userId) {
      const unsubscribe = db.subscribeOrderBy(
        `users/${user.userId}/assets`,
        'maturity',
        'desc',
        handleAssetList,
      );
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const handleAssetList = (data: SnapshotData[]) => {
    if (data.length > 0) {
      try {
        const assetsList = data.map(d => d.data) as AssetPreviewData[];
        const assets: AssetPreview[] = assetsList.map(a => {
          return {
            units: a.units,
            unitCost: a.unitCost,
            maturity: moment(a.maturity.toDate()).format('MMM Do YYYY'),
            repaid: a.repaid,
            installed: !!a.repaid,
            alias: a.alias,
          };
        });
        setAssets(assets);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const goToAssetDetail = () => {
    navigation.navigate('AuthStack', { screen: 'AssetDetail' });
  };

  return (
    <AssetDetailCtx.Provider value={{}}>
      <AssetsView assets={assets} goToAssetDetail={goToAssetDetail} />
    </AssetDetailCtx.Provider>
  );
};

export default AssetsContainer;
