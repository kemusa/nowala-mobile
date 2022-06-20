import React from 'react';
import { Dimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import Icons from '../../../../../../components/atoms/icons';
import NowalaText from '../../../../../../components/atoms/text';
import colors from '../../../../../../theme/colors';
import styles from './styles';

const ImpactMetricCardView: React.FC<ImpactMetricCardProps> = ({
  goToImpactDetail,
  detail,
  metric,
}) => {
  return (
    <View style={{ margin: '1%' }}>
      <Shadow
        distance={3}
        startColor={'#00000020'}
        viewStyle={styles.shadowViewStyles}
        radius={8}>
        <TouchableOpacity
          onPress={() => goToImpactDetail(detail)}
          activeOpacity={0.5}
          style={styles.container}>
          <View
            style={[
              styles.colorBar,
              { backgroundColor: detail.backgroundColor },
            ]}></View>
          <View>
            <NowalaText.BigDataText>{metric}</NowalaText.BigDataText>
            <NowalaText.Subtitle1>{detail.metricTitle}</NowalaText.Subtitle1>
          </View>
          <View style={styles.colRight}>
            <Icons.ChevronRight></Icons.ChevronRight>
          </View>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default ImpactMetricCardView;
