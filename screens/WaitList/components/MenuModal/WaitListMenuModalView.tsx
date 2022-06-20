import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import NowalaText from '../../../../components/atoms/text';

const WaitListMenuModalView: React.FC<WaitListModalView> = ({
  isOpen,
  onClose,
  signOut,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
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

export default WaitListMenuModalView;
