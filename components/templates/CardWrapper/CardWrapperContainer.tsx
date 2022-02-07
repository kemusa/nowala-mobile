import React from 'react';
import { View } from 'react-native';
import CardDetailsButton from '../../molecules/CardDetailsButton';
import styles from './styles';

const CardWrapperContainer: React.FC<CardProps> = ({
  children,
  hasDetail,
  detailOnPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          padding: hasDetail ? 0 : 10,
          paddingLeft: hasDetail ? 10 : undefined,
          paddingBottom: hasDetail ? 10 : undefined,
        },
      ]}>
      {detailOnPress && (
        <View style={styles.row1}>
          <CardDetailsButton onPress={detailOnPress} />
        </View>
      )}
      {children}
    </View>
  );
};

export default CardWrapperContainer;
