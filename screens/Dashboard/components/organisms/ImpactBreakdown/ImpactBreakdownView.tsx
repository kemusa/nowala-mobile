import React from 'react';
import { Dimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { flexDirection } from 'styled-system';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import colors from '../../../../../theme/colors';
import { impactContent } from './ImpactContent';
import styles from './styles';

const ImpactBreakdownView: React.FC<ImpactBreakdownProps> = ({
  units,
  installed,
  impactMetrics,
  openProgressModal,
}) => {
  console.log(Object.keys(impactMetrics));
  const { WHITE } = colors;
  const content = impactContent;
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Your impact
      </NowalaText.Headline2Light>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {impactMetrics &&
          Object.keys(impactMetrics).map((item, idx) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={idx}
              style={{
                width: Dimensions.get('window').width / 2 - 40, // todo: make width dynamic
                height: 135,
                backgroundColor: WHITE,
                borderRadius: 6,
                marginBottom: 25,
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: {
                  width: 0,
                  height: 3.32,
                },
                shadowOpacity: 1.0,
                shadowRadius: 2,
                elevation: 3,
                padding: 12,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 5,
                  height: 105,
                  backgroundColor: content[item as keyof ImpactMetrics].color,
                  position: 'absolute',
                }}></View>
              <View>
                <NowalaText.BigDataText>
                  {impactMetrics[item as keyof ImpactMetrics]}
                </NowalaText.BigDataText>
                <NowalaText.Subtitle1>
                  {content[item as keyof ImpactMetrics].title}
                </NowalaText.Subtitle1>
              </View>
              <View style={{ position: 'absolute', right: 5 }}>
                <Icons.ChevronRight></Icons.ChevronRight>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

export default ImpactBreakdownView;
