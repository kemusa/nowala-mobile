import React from 'react';
import { Image, View } from 'react-native';
import ImpactCardIcon from '../../../../../components/atoms/icons/ImpactCardIcon';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import ItemLongList from '../../../../../components/templates/CardWrapper/ItemLongList';
import AssetItem from './AssetItem';
import styles from './styles';

const AssetListView: React.FC = ({}) => {
  const list = [
    <AssetItem
      icon={
        <Image
          style={{ height: 45, width: 45 }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={17}
      value={'£1090'}
      iconWidth={45}
    />,
    <AssetItem
      icon={
        <Image
          style={{ height: 45, width: 45 }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={19}
      value={'£1090'}
      iconWidth={45}
    />,
    <AssetItem
      icon={
        <Image
          style={{ height: 45, width: 45 }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={48}
      value={'£1090'}
      iconWidth={45}
    />,
  ];
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Assets
      </NowalaText.Headline2Light>
      <CardWrapper>
        <ItemLongList list={list} />
      </CardWrapper>
    </>
  );
};

export default AssetListView;
