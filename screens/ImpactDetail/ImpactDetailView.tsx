import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { ImpactDetailContext } from './ImpactDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import { buttonHeight } from '../../utils/consts/STYLES';
import NewOrderModal from './organisms/NewOrdersModal';

const ImpactDetailView = () => {
  const { impactDetail, openNewOrderModal } = useContext(ImpactDetailContext);
  const {
    backgroundColor,
    title,
    contextText,
    impactExamplesHeading,
    impactExamples,
    imagePath,
    timePeriodText,
    ctaText,
  } = impactDetail;
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
          <Image source={{ uri: imagePath }} style={styles.image} />
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
      <NewOrderModal title={ctaText} />
      <View style={styles.buttonContainer}>
        <SecondaryButton text={ctaText} onPress={openNewOrderModal} />
      </View>
    </SafeAreaView>
  );
};

export default ImpactDetailView;
