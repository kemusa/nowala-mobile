import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import NowalaText from '../../components/atoms/text';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { UserAccountContext } from './UserAccountContext';
import { Avatar } from 'native-base';
import LinkText2 from '../../components/atoms/text/LinkText2';

const UserAccountView: React.FC = () => {
  const { email, initials, deleteAccount, goToManageAccount } =
    useContext(UserAccountContext);
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
        <LinkText2 onPress={goToManageAccount}>Manage account</LinkText2>
      </View>
    </SafeAreaView>
  );
};

export default UserAccountView;
