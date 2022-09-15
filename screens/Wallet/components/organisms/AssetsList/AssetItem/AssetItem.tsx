import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Progress } from 'native-base';
import NowalaText from '../../../../../../components/atoms/text';
import styles from './styles';
import { screenPadding } from '../../../../../../utils/consts/STYLES';

const AssetItemView: React.FC<AssetItem> = ({
  title,
  units,
  repaid,
  icon,
  iconWidth,
  maturity,
  onPress,
}) => {
  const { width } = Dimensions.get('window');
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <View
        style={[
          styles.contentWrapper,
          {
            width: width - screenPadding * 2 - (iconWidth || 45) - 40,
          },
        ]}>
        <View style={styles.topRow}>
          <NowalaText.Body1
            style={{ ...styles.topRowText, ...styles.assetTitle }}>
            {title}
          </NowalaText.Body1>
          <NowalaText.Subtitle2
            style={{ ...styles.topRowText, ...styles.unitsText }}>
            {units > 1 ? `${units} units` : `${units} unit`}
          </NowalaText.Subtitle2>
        </View>
        <View>
          <Progress size={'xs'} value={repaid} />
        </View>
        <View style={styles.bottomRow}>
          <NowalaText.Subtitle2>{`${repaid}% repaid`}</NowalaText.Subtitle2>
          <NowalaText.Subtitle2
            style={
              styles.dueDateText
            }>{`due ${maturity}`}</NowalaText.Subtitle2>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AssetItemView;
