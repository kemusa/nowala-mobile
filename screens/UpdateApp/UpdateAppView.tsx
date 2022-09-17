import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NewOrderModal from '../../components/organisms/NewOrdersModal';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import NowalaLogo from '../../components/atoms/icons/NowalaLogo';

const UpdateAppView: React.FC<UpdateAppView> = ({ goToAppStore }) => {
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: '#fff' }]}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{ width: '100%', height: 250, resizeMode: 'contain' }}
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/nowala_img_collection.png',
            }}
          />
          <View style={{ width: '100%', height: 50 }}></View>
          <NowalaText.Headline2 style={styles.headings}>
            {`Time to update to the`}
          </NowalaText.Headline2>
          <NowalaText.Headline2 style={styles.headings}>
            {`latest version of Nowala`}
          </NowalaText.Headline2>
        </View>
      </ScrollView>
      <View style={{ padding: 20 }}>
        <PrimaryButton text={'Update now'} onPress={goToAppStore} />
      </View>
    </SafeAreaView>
  );
};

export default UpdateAppView;
