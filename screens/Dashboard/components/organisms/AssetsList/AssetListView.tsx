import React from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardLongList from '../../../../../components/templates/CardLongList';
import AssetItem from './AssetItem';
import styles from './styles';

const AssetListView: React.FC = ({}) => {
  const iconSize = 45;
  const list = [
    <AssetItem
      icon={
        <Image
          style={{ height: iconSize, width: iconSize }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={17}
      units={10}
      iconWidth={iconSize}
    />,
    <AssetItem
      icon={
        <Image
          style={{ height: iconSize, width: iconSize }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={19}
      units={4}
      iconWidth={iconSize}
    />,
    <AssetItem
      icon={
        <Image
          style={{ height: iconSize, width: iconSize }}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
          }}
        />
      }
      title={'Solar panel kits'}
      repaid={48}
      units={1}
      iconWidth={iconSize}
    />,
  ];
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Assets
      </NowalaText.Headline2Light>
      <CardWrapper>
        <CardLongList list={list} />
      </CardWrapper>
    </>
  );
};

export default AssetListView;
