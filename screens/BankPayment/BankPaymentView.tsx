import { View, SafeAreaView, ScrollView, Text, Linking } from 'react-native';
import React from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import BanksModal from './components/BanksModal';
import CopyButton from '../../components/atoms/buttons/CopyButton';
import { details } from './Details';

const BankPaymentView: React.FC<BankPaymentViewProps> = ({
  onBankSelectClose,
  openBankSelect,
  viewBankSelect,
  redirect,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <NowalaText.Headline1 style={styles.heading}>
            Pay by bank transfer
          </NowalaText.Headline1>
          <NowalaText.Body1 style={styles.instructions}>
            To complete your order please send a payment of £xx to the bank
            details listed below within 24 hours.
          </NowalaText.Body1>
          {details.map((d, idx) => (
            <View key={idx} style={styles.instructionItem}>
              <NowalaText.Headline4 style={styles.instructionHeading}>
                {`${d.title}:`}
              </NowalaText.Headline4>
              <View style={styles.bankDetail}>
                <NowalaText.Body1>{d.value}</NowalaText.Body1>
                <CopyButton copyText={d.value} />
              </View>
            </View>
          ))}
          <Text>
            <NowalaText.Body1>
              Completing your payment indicates that you agree to our{' '}
            </NowalaText.Body1>
            <NowalaText.LinkText2
              onPress={() =>
                Linking.openURL(
                  'https://storage.googleapis.com/nowala-public/Nowala_Asset_Owner_Agreement.pdf',
                )
              }>
              Asset Owner Agreement.
            </NowalaText.LinkText2>
          </Text>
        </View>
      </ScrollView>
      <BanksModal isOpen={viewBankSelect} onClose={onBankSelectClose} />
      <View
        style={[
          styles.doubleButtonContainer,
          { height: 170, alignItems: 'center' },
        ]}>
        <PrimaryButton text="Transfer now" onPress={openBankSelect} />
        <SecondaryButton
          text="I made this transfer"
          onPress={redirect}></SecondaryButton>
        <NowalaText.LinkText style={{ marginTop: 15 }} onPress={redirect}>
          I will pay within 24 hours
        </NowalaText.LinkText>
      </View>
    </SafeAreaView>
  );
};

export default BankPaymentView;
