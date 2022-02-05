import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import NowalaText from '../../components/atoms/text';
import OrderItem from './components/molecules/OrderItem';
import styles from './styles';
import { YourOrdersContext } from './YourOrdersContext';

const YourOrdersView: React.FC = () => {
  const { orders } = useContext(YourOrdersContext);
  return (
    <View style={styles.container}>
      <NowalaText.Headline1 style={styles.heading}>
        Your Orders
      </NowalaText.Headline1>
      <ScrollView>
        {orders.map((order, idx) => (
          <OrderItem key={idx} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

export default YourOrdersView;
