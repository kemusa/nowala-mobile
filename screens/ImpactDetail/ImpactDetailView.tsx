import { View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { ImpactDetailContext } from './ImpactDetailContext';
import NowalaText from '../../components/atoms/text';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NewOrderModal from '../../components/organisms/NewOrdersModal';

const ImpactDetailView: React.FC = () => {
  const {
    impactDetail,
    openNewOrderModal,
    viewNewOrder,
    closeNewOrderModal,
    onOrderSent,
    userId,
    projectId,
    email,
    firstName,
  } = useContext(ImpactDetailContext);

  const {
    backgroundColor,
    title,
    contextText,
    impactExamplesHeading,
    impactExamples,
    imagePath,
    timePeriodText,
    ctaText,
    impact_metric,
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
      <NewOrderModal
        title={ctaText}
        pageRef={impact_metric}
        projectId={projectId}
        isOpen={viewNewOrder}
        userId={userId}
        email={email}
        onClose={closeNewOrderModal}
        onOrderSent={onOrderSent}
        firstName={firstName}
      />

      <View style={styles.buttonContainer}>
        <SecondaryButton text={ctaText} onPress={openNewOrderModal} />
      </View>
    </SafeAreaView>
  );
};

export default ImpactDetailView;
