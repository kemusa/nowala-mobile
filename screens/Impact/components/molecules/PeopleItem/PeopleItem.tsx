import React from 'react';
import { Dimensions, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import { screenPadding } from '../../../../../utils/consts/STYLES';
import LocationIcon from '../../../../../components/atoms/icons/LocationIcon';

const AssetItemView: React.FC<PeopleItem> = ({
  title,
  location,
  icon,
  iconWidth,
}) => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {icon}
        <View style={styles.contentWrapper}>
          <View style={styles.topRow}>
            <NowalaText.Body1
              style={{ ...styles.topRowText, ...styles.assetTitle }}>
              {title}
            </NowalaText.Body1>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LocationIcon />
            <NowalaText.Subtitle2 style={{ marginLeft: 5 }}>
              {location}
            </NowalaText.Subtitle2>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <NowalaText.Body1>{10}</NowalaText.Body1>
        <NowalaText.Subtitle3 style={{ fontSize: 11 }}>
          {'people'}
        </NowalaText.Subtitle3>
      </View>
    </View>
  );
};

export default AssetItemView;
