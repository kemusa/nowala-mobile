import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Icons from '../../atoms/icons';
import NowalaText from '../../atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

const ProgressModalView: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  signOut,
  goToAccount,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        <Actionsheet.Item onPress={goToAccount} onPressOut={onClose}>
          <View style={styles.itemContainer}>
            <Ionicons name="person-circle-outline" size={25} />
            <NowalaText.Body1 style={styles.itemText}>Account</NowalaText.Body1>
          </View>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={signOut} onPressOut={onClose}>
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
