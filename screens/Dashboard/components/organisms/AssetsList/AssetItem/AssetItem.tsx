import React from 'react';
import { Dimensions, View } from 'react-native';
import { Progress } from 'native-base';
import NowalaText from '../../../../../../components/atoms/text';
import colors from '../../../../../../theme/colors';
import styles from './styles';
import { screenPadding } from '../../../../../../utils/consts/STYLES';

const AssetItemView: React.FC<AssetItem> = ({
  title,
  repaid,
  value,
  icon,
  iconWidth,
}) => {
  const { width } = Dimensions.get('window');
  const { PRIMARY } = colors;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {icon}
        <View
          style={{
            marginLeft: 10,
            width: width - screenPadding * 2 - (iconWidth || 45) - 40,
          }}>
          <NowalaText.Body1 style={{ color: PRIMARY }}>
            {title}
          </NowalaText.Body1>
          <View>
            <Progress size={'xs'} value={repaid} />
          </View>
          <NowalaText.Subtitle2 style={{ fontSize: 11 }}>
            {`${repaid}% repaid`}
          </NowalaText.Subtitle2>
        </View>
      </View>
    </View>
  );
};

export default AssetItemView;
