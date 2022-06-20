import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../theme/colors';
import MenuModal from './components/MenuModal';

const WaitListView = () => {
  const { TRETIARY } = colors;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/waitlist_hero.png',
        }}
      />
      <ScrollView style={styles.scrollView}>
        <NowalaText.Headline2Light style={styles.heading}>
          You're on the list!
        </NowalaText.Headline2Light>
        <NowalaText.Headline4 style={styles.heading2}>
          What happens next?
        </NowalaText.Headline4>
        <View style={styles.listItem}>
          <Ionicons name="notifications-outline" size={20} color={TRETIARY} />
          <NowalaText.Body1 style={{ marginLeft: 10 }}>
            Get notified when your order is ready
          </NowalaText.Body1>
        </View>
        <View style={styles.listItem}>
          <Ionicons name="cash-outline" size={20} color={TRETIARY} />
          <NowalaText.Body1 style={{ marginLeft: 10 }}>
            Complete your payment via bank transfer
          </NowalaText.Body1>
        </View>
        <View style={styles.listItem}>
          <Ionicons name="leaf-outline" size={20} color={TRETIARY} />
          <NowalaText.Body1 style={{ marginLeft: 10 }}>
            Start making an impact!
          </NowalaText.Body1>
        </View>
        <View style={{ width: '100%', height: 100 }}></View>
      </ScrollView>
      <MenuModal />
    </SafeAreaView>
  );
};

export default WaitListView;
