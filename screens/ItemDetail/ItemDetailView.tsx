import { View, Image, ScrollView, Linking } from 'react-native';
import React, { useContext } from 'react';
import { ItemDetailContext } from './ItemDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import LinkText2 from '../../components/atoms/text/LinkText2';

const ImpactDetailView: React.FC = () => {
  const { title, description, withdrawal } = useContext(ItemDetailContext);

  const openWithdrawlRequestForm = () => {
    Linking.openURL(
      'https://docs.google.com/forms/d/e/1FAIpQLSe-RnmhYuvvq-VH4VUW1X8On-UhtNYUrJhs2brzasTQNoXznA/viewform?edit_requested=true',
    );
  };

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: '#fff' }]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.definitionContainer}>
            <NowalaText.Headline3Light style={styles.contextText}>
              {`What does "${title}" mean?`}
            </NowalaText.Headline3Light>
            <NowalaText.Subtitle1 style={{}}>
              {description}
            </NowalaText.Subtitle1>
          </View>
          <View>
            <NowalaText.Headline2 style={styles.headings}>
              {'Details coming soon'}
            </NowalaText.Headline2>
            <NowalaText.Body1 style={styles.impactExamplesHeading}>
              {`Stay tuned for future app updates`}
            </NowalaText.Body1>
          </View>
        </View>
      </ScrollView>
      {withdrawal && (
        <View style={{ padding: 20, alignItems: 'center' }}>
          <LinkText2 onPress={openWithdrawlRequestForm}>
            Withdraw some cash
          </LinkText2>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ImpactDetailView;
