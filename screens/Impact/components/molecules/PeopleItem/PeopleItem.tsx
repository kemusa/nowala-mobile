import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import LocationIcon from '../../../../../components/atoms/icons/LocationIcon';

const PeopleItemView: React.FC<PeopleItem> = ({
  title,
  location,
  iconUrl,
  numPeople,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.columnLeft}>
        <Image
          style={styles.image}
          source={{
            uri: iconUrl,
          }}
        />
        <View style={styles.contentWrapper}>
          <View style={styles.topRow}>
            <NowalaText.Body2
              style={{ ...styles.topRowText, ...styles.assetTitle }}>
              {title}
            </NowalaText.Body2>
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
        <NowalaText.Headline3 style={{ color: '#326493' }}>
          {numPeople}
        </NowalaText.Headline3>
        <NowalaText.Subtitle3>{'people'}</NowalaText.Subtitle3>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleItemView;
