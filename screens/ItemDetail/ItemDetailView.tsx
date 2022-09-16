import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { ItemDetailContext } from './ItemDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NewOrderModal from '../../components/organisms/NewOrdersModal';

const ImpactDetailView: React.FC = () => {
  const { title, description } = useContext(ItemDetailContext);

  // const {
  //   backgroundColor,
  //   title,
  //   contextText,
  //   impactExamplesHeading,
  //   impactExamples,
  //   imagePath,
  //   timePeriodText,
  //   ctaText,
  //   impact_metric,
  // } = impactDetail;

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
    </SafeAreaView>
  );
};

export default ImpactDetailView;
