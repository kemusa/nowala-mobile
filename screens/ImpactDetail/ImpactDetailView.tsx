import { View, Text, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { ImpactDetailContext } from './ImpactDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const ImpactDetailView = () => {
<<<<<<< Updated upstream
=======
  const { impactDetail, openNewOrderModal, projectAlias } =
    useContext(ImpactDetailContext);
>>>>>>> Stashed changes
  const {
    backgroundColor,
    title,
    contextText,
    impactExamplesHeading,
    impactExamples,
    imagePath,
    timePeriodText,
<<<<<<< Updated upstream
  } = useContext(ImpactDetailContext);
=======
    ctaText,
    impact_metric,
  } = impactDetail;
>>>>>>> Stashed changes
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor }]}>
      <ScrollView>
        <View style={styles.container}>
          <NowalaText.Headline4 style={styles.contextText}>
            {contextText}
          </NowalaText.Headline4>
          <NowalaText.Headline1 style={styles.headings}>
            {title}
          </NowalaText.Headline1>
          <NowalaText.Headline4 style={styles.headings}>
            {timePeriodText && timePeriodText}
          </NowalaText.Headline4>
          <Image
            source={{ uri: imagePath }}
            style={{
              height: 225,
              width: '100%',
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 30,
            }}
          />
          <NowalaText.Headline2
            style={{ ...styles.headings, ...styles.impactExamplesHeading }}>
            {impactExamplesHeading}
          </NowalaText.Headline2>
          {impactExamples.map((example, idx) => (
            <NowalaText.Headline4 key={idx} style={styles.exampleText}>
              {example}
            </NowalaText.Headline4>
          ))}
        </View>
      </ScrollView>
<<<<<<< Updated upstream
=======
      <NewOrderModal
        title={ctaText}
        impact_metric={impact_metric}
        projectAlias={projectAlias}
      />

      <View style={styles.buttonContainer}>
        <SecondaryButton text={ctaText} onPress={openNewOrderModal} />
      </View>
>>>>>>> Stashed changes
    </SafeAreaView>
  );
};

export default ImpactDetailView;
