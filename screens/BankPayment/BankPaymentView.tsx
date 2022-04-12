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
  price,
  viewBankSelect,
  redirect,
  paymentRef,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <NowalaText.Headline1 style={styles.heading}>
            Pay by bank transfer
          </NowalaText.Headline1>
          <Text style={{ marginBottom: 15 }}>
            <NowalaText.Body1 style={styles.instructions}>
              To complete your order please send a payment of{' '}
            </NowalaText.Body1>
            <NowalaText.Headline4
              style={{ ...styles.instructions, fontSize: 15 }}>
              £{price}{' '}
            </NowalaText.Headline4>
            <NowalaText.Body1 style={styles.instructions}>
              to the bank details listed below within{' '}
            </NowalaText.Body1>
            <NowalaText.Headline4
              style={{ ...styles.instructions, fontSize: 15 }}>
              24 hours.
            </NowalaText.Headline4>
          </Text>
          <View style={styles.instructionItem}>
            <NowalaText.Headline4 style={styles.instructionHeading}>
              {'Please use this payment reference'}
            </NowalaText.Headline4>
            <View style={styles.bankDetail}>
              <NowalaText.Body1>{paymentRef}</NowalaText.Body1>
              <CopyButton copyText={paymentRef} />
            </View>
          </View>
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
        <View style={{ width: '100%', height: 250 }}></View>
      </ScrollView>
      <BanksModal isOpen={viewBankSelect} onClose={onBankSelectClose} />
      <View
        style={[styles.doubleButtonContainer, styles.buttonContainerConfig]}>
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
