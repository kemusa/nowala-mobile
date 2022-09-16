import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { AssetDetailCtx } from './AssetDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NewOrderModal from '../../components/organisms/NewOrdersModal';

const AssetDetailView: React.FC = () => {
  const {} = useContext(AssetDetailCtx);

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
            <NowalaText.Headline2 style={styles.headings}>
              {'Asset details coming soon'}
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

export default AssetDetailView;
