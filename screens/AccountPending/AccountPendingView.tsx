import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import { AccountPendingCxt } from './AccountPendingContext';
import { UNITED_KINGDOM } from '../../utils/consts/COUNTRIES';

const AccountPendingView = () => {
  const { goToProjects, user } = useContext(AccountPendingCxt);

  const isUK = user.country === UNITED_KINGDOM;

  const openingText = isUK ? (
    <NowalaText.Body1>
      After your first order is confirmed we'll load your dashboard
    </NowalaText.Body1>
  ) : (
    <NowalaText.Body1>
      Unfortunately we're not yet operating in your country
    </NowalaText.Body1>
  );

  const ctaText = isUK ? (
    <Text>
      <NowalaText.Body1>
        If you haven't made an order yet, have a look at the{' '}
      </NowalaText.Body1>
      <NowalaText.LinkText onPress={goToProjects}>projects</NowalaText.LinkText>
      <NowalaText.Body1> you can join.</NowalaText.Body1>
    </Text>
  ) : (
    <NowalaText.Body1>
      If you have access to Britsh Pound bank account we still may be able to
      support you, please contact support@nowala.io and someone will be in touch
    </NowalaText.Body1>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <NowalaText.Headline2 style={{ marginBottom: 30, width: '100%' }}>
            Welcome to Nowala!
          </NowalaText.Headline2>
          {openingText}
          <Image
            style={styles.image}
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/account_hero.png',
            }}
          />
          {ctaText}
        </View>
        <View style={{ width: '100%', height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountPendingView;
