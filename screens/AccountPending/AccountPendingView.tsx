import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import { AccountPendingCxt } from './AccountPendingContext';

const AccountPendingView = () => {
  const { goToProjects } = useContext(AccountPendingCxt);
  return (
    <View style={styles.container}>
      <NowalaText.Headline1 style={{ marginBottom: 30 }}>
        Account created!
      </NowalaText.Headline1>
      <NowalaText.Body1 style={styles.bodyText}>
        We are verfiying your account. Our team will be in touch with you via
        email within 24 hours.
      </NowalaText.Body1>
      <Image
        style={styles.image}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/account_hero.png',
        }}
      />
      <NowalaText.Body1 style={styles.bodyText}>
        In the meantime, have a look at the projects you can join.
      </NowalaText.Body1>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          marginBottom: 50,
        }}>
        <PrimaryButton text="View projects" onPress={goToProjects} />
      </View>
    </View>
  );
};

export default AccountPendingView;
