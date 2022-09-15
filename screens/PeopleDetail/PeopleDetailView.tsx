import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { PeopleDetailCtx } from './PeopleDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const PeopleDetailView: React.FC = () => {
  const {} = useContext(PeopleDetailCtx);

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: '#fff' }]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.definitionContainer}>
            <NowalaText.Headline2 style={styles.headings}>
              {'People details coming soon'}
            </NowalaText.Headline2>
            <NowalaText.Body1 style={styles.impactExamplesHeading}>
              {`Stay tuned for future app updates to see your details on your assets.`}
            </NowalaText.Body1>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeopleDetailView;
