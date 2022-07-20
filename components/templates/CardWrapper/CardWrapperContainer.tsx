import React from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import CardDetailsButton from '../../molecules/CardDetailsButton';
import styles from './styles';

const CardWrapperContainer: React.FC<CardProps> = ({
  children,
  // hasDetail,
  detailOnPress,
}) => {
  return (
    <View style={{ margin: '1%' }}>
      <Shadow
        distance={3}
        startColor={'#00000020'}
        viewStyle={{ width: '100%' }}
        containerViewStyle={styles.container}
        radius={8}>
        <View
          style={[
            {
              padding: 10,
            },
          ]}>
          {detailOnPress && (
            <View style={styles.row1}>
              <CardDetailsButton onPress={detailOnPress} />
            </View>
          )}
          {children}
        </View>
      </Shadow>
    </View>
  );
};

export default CardWrapperContainer;
