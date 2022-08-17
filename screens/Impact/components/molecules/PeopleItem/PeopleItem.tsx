import React from 'react';
import { View, Image } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import LocationIcon from '../../../../../components/atoms/icons/LocationIcon';

const AssetItemView: React.FC<PeopleItem> = ({
  title,
  location,
  iconUrl,
  numPeople,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.columnLeft}>
        <Image
          style={styles.image}
          source={{
            uri: iconUrl,
          }}
        />
        <View style={styles.contentWrapper}>
          <View style={styles.topRow}>
            <NowalaText.Body1
              style={{ ...styles.topRowText, ...styles.assetTitle }}>
              {title}
            </NowalaText.Body1>
          </View>
          <View style={styles.locationWrapper}>
            <LocationIcon />
            <NowalaText.Subtitle2 style={styles.locationText}>
              {location}
            </NowalaText.Subtitle2>
          </View>
        </View>
      </View>
      <View style={styles.peopleWrapper}>
        <NowalaText.Body1>{numPeople}</NowalaText.Body1>
        <NowalaText.Subtitle3 style={{ fontSize: 11 }}>
          {'people'}
        </NowalaText.Subtitle3>
      </View>
    </View>
  );
};

export default AssetItemView;
