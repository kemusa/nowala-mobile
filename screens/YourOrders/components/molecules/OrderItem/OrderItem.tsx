import { Divider } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import { OrderItemProps } from './types';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { paid, units, assetTitle, currency, investment, date } = order;
  return (
    <>
      <NowalaText.Body1>{date}</NowalaText.Body1>
      <Divider />
      <View style={styles.container}>
        <NowalaText.Headline5>{`${assetTitle} x ${units}`}</NowalaText.Headline5>
        <View style={styles.col2}>
          <NowalaText.Body1>
            {paid.currency}
            {paid.unitCost * units}
          </NowalaText.Body1>
          <NowalaText.Subtitle1>{`${currency} ${investment}`}</NowalaText.Subtitle1>
        </View>
      </View>
      <Divider />
    </>
  );
};

export default OrderItem;
