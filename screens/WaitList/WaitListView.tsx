import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HStack } from 'native-base';
const { height } = Dimensions.get('window');

const WaitListView = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.backgroundContainer}> */}
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: '50%',
          resizeMode: 'cover',
          top: 0,
          zIndex: 10,
        }}
        source={{
          uri: 'https://storage.googleapis.com/nowala-public/waitlist_hero.png',
        }}
      />
      <ScrollView
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: height / 2,
          padding: 20,
          zIndex: 1,
        }}>
        {/* <ScrollView> */}
        <NowalaText.Headline1 style={{ marginTop: 10 }}>
          You're on the list!
        </NowalaText.Headline1>
        <NowalaText.Body1
          style={{ marginTop: 10, fontSize: 20, lineHeight: 34 }}>
          We’ll let you know when new Solar Panel Kits are available and send
          you instructions on how to complete your order.
        </NowalaText.Body1>
        {/* <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="medical" size={20} />
            <NowalaText.Subtitle1 style={{ marginTop: 30, fontSize: 20 }}>
              Provide affordable solar power
            </NowalaText.Subtitle1>
          </View>
          <NowalaText.Subtitle1 style={{ marginTop: 30, fontSize: 20 }}>
            Earn a return
          </NowalaText.Subtitle1>
          <NowalaText.Subtitle1 style={{ marginTop: 30, fontSize: 20 }}>
            Watch your impact grow
          </NowalaText.Subtitle1>
        </View> */}
        <View style={{ width: '100%', height: 50 }}></View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default WaitListView;
