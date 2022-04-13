import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

const ProgressModalView: React.FC<MenuModalViewProps> = ({
  isOpen,
  onClose,
  openOrdersModal,
  signOut,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        <Actionsheet.Item onPress={openOrdersModal}>
          <View style={styles.itemContainer}>
            <Ionicons name="receipt-outline" size={25} />
            {/* <Icons.OrderIcon></Icons.OrderIcon> */}
            <NowalaText.Body1 style={styles.itemText}>
              Your Orders
            </NowalaText.Body1>
          </View>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={signOut}>
          <View style={styles.itemContainer}>
            <Ionicons name="power" size={25} />
            <NowalaText.Body1 style={styles.itemText}>
              Sign Out
            </NowalaText.Body1>
          </View>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProgressModalView;
