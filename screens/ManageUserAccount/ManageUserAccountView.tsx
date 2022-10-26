import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import NowalaText from '../../components/atoms/text';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { UserAccountContext } from './ManageUserAccountContext';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import WarningButton from '../../components/atoms/buttons/WarningButton';
import { Avatar } from 'native-base';

const UserAccountView: React.FC = () => {
  const { email, initials, deleteAccount } = useContext(UserAccountContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 30 }}>
            <View
              style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
              <Avatar
                bg="lightBlue.400"
                source={{
                  uri: 'https://bit.ly/broken-link',
                }}
                size="xl">
                {initials}
              </Avatar>
            </View>
            <NowalaText.Subtitle1 style={{ marginLeft: 5 }}>
              Email
            </NowalaText.Subtitle1>
            <View
              style={{
                width: '100%',
                backgroundColor: '#E8E8E8',
                padding: 10,
                borderRadius: 6,
              }}>
              <NowalaText.Body1>{email}</NowalaText.Body1>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <WarningButton text="Delete Account" onPress={deleteAccount} />
      </View>
    </SafeAreaView>
  );
};

export default UserAccountView;
