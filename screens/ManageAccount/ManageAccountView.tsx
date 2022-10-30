import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import NowalaText from '../../components/atoms/text';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ManageAccountContext } from './ManageAccountContext';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import WarningButton from '../../components/atoms/buttons/WarningButton';
import { Avatar } from 'native-base';

const UserAccountView: React.FC = () => {
  const { deleteAccount } = useContext(ManageAccountContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}></ScrollView>
      <View style={styles.buttonContainer}>
        <WarningButton text="Delete Account" onPress={deleteAccount} />
      </View>
    </SafeAreaView>
  );
};

export default UserAccountView;
