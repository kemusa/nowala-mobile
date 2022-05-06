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
        Welcome to Nowala!
      </NowalaText.Headline1>
      <NowalaText.Body1 style={styles.bodyText}>
        After your first order is confirmed we'll load your dashboard
      </NowalaText.Body1>
      <Image
        style={styles.image}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/account_hero.png',
        }}
      />
      <Text>
        <NowalaText.Body1 style={styles.bodyText}>
          If you haven't made an order yet, have a look at the{' '}
        </NowalaText.Body1>
        <NowalaText.LinkText onPress={goToProjects} style={styles.bodyText}>
          projects
        </NowalaText.LinkText>
        <NowalaText.Body1 style={styles.bodyText}>
          {' '}
          you can join.
        </NowalaText.Body1>
      </Text>
    </View>
  );
};

export default AccountPendingView;
