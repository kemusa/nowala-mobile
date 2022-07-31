import { Actionsheet, Box } from 'native-base';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import PrimaryButton from '../../../../../components/atoms/buttons/PrimaryButton';

const WithdrawlModalView: React.FC<WithdrawlModalViewProps> = ({
  isOpen,
  onClose,
}) => {
  const openWithdrawlRequestForm = () => {
    Linking.openURL(
      'https://docs.google.com/forms/d/e/1FAIpQLSe-RnmhYuvvq-VH4VUW1X8On-UhtNYUrJhs2brzasTQNoXznA/viewform?edit_requested=true',
    );
  };
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        {/* <View style={styles.itemContainer}> */}
        <Box style={{ padding: 10 }}>
          <NowalaText.Headline2>
            How do I withdraw my return?
          </NowalaText.Headline2>
          <Text style={{ marginTop: 15 }}>
            <NowalaText.Body1>
              You can withdraw your funds by sending a Cash Withdrawl Request
            </NowalaText.Body1>
          </Text>
          <Text style={{ marginTop: 15, marginBottom: 25 }}>
            <NowalaText.Body1>💡 </NowalaText.Body1>
            <NowalaText.BoldBody1>Note: </NowalaText.BoldBody1>
            <NowalaText.Subtitle1 style={{ fontSize: 15 }}>
              We charge a{' '}
            </NowalaText.Subtitle1>
            <NowalaText.BoldBody1 style={{ fontSize: 15, color: '#5E8497' }}>
              £1 processing fee{' '}
            </NowalaText.BoldBody1>
            <NowalaText.Subtitle1 style={{ fontSize: 15 }}>
              every time you withdraw. It's recommeded to wait until all your
              returns have been collected before withdrawing to avoid multiple
              charges that{' '}
            </NowalaText.Subtitle1>
            <NowalaText.BoldBody1 style={{ fontSize: 15, color: '#5E8497' }}>
              reduce your profits
            </NowalaText.BoldBody1>
          </Text>
        </Box>
        <PrimaryButton onPress={openWithdrawlRequestForm} text="Withdraw now" />
        <View style={{ width: '100%', height: 30 }}></View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default WithdrawlModalView;
