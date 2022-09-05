import React from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import PlusCtaIcon from '../../atoms/icons/PlusCtaIcon';
import NowalaText from '../../atoms/text';
import CardCtaButton from '../../molecules/CardCtaButton';
import CardDetailsButton from '../../molecules/CardDetailsButton';
import styles from './styles';

const CardWrapperContainer: React.FC<CardProps> = ({
  children,
  type,
  cta,
  ctaText,
  ctaIcon,
  title,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        {type === 'primary' && title && (
          <NowalaText.Headline2Light style={{ marginLeft: 5, marginBottom: 5 }}>
            {title}
          </NowalaText.Headline2Light>
        )}
        {type === 'secondary' && title && (
          <NowalaText.Headline5 style={{ marginLeft: 5, marginBottom: 5 }}>
            {title}
          </NowalaText.Headline5>
        )}
        {cta && (
          <CardCtaButton onPress={cta} text={ctaText || ''} icon={ctaIcon} />
        )}
      </View>
      <View style={{ margin: '1%' }}>
        <Shadow
          distance={2}
          startColor={'#00000020'}
          viewStyle={{ width: '100%' }}
          containerViewStyle={styles.container}
          offset={[0, 1]}
          radius={8}>
          <View
            style={[
              {
                padding: 10,
                paddingBottom: 15,
                backgroundColor: '#fff',
                borderRadius: 8,
              },
            ]}>
            {children}
          </View>
        </Shadow>
      </View>
    </>
  );
};

export default CardWrapperContainer;
