import { Actionsheet } from 'native-base';
import React from 'react';
import { Image, View } from 'react-native';
import PrimaryButton from '../../../../components/atoms/buttons/PrimaryButton';
import NowalaText from '../../../../components/atoms/text';
import NumberSelect from '../../../../components/molecules/NumberSelect';
import styles from './styles';

const NewOrderModalView: React.FC<NewOrdersModalViewProps> = ({
  isOpen,
  onClose,
  orderCounter,
  title,
  orderConfirmBtn,
  orderConfirmed,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      {orderConfirmed ? (
        <Actionsheet.Content style={styles.confirmedContainer}>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/confirm_check_mark.png',
            }}
            style={{ height: 110, width: 110, marginTop: 80, marginBottom: 15 }}
          />
          <NowalaText.Headline4 style={styles.title}>
            Thank you for your order!
          </NowalaText.Headline4>
          <NowalaText.Subtitle1 style={{ marginBottom: 50 }}>
            We’ll be in touch to complete your order soon
          </NowalaText.Subtitle1>
        </Actionsheet.Content>
      ) : (
        <Actionsheet.Content style={styles.container}>
          <NowalaText.Headline2 style={styles.title}>
            {title}
          </NowalaText.Headline2>
          <NowalaText.WarningText style={styles.warning}>
            We’re now accepting a limited number of orders for Solar Kits with
            Ignite Power
          </NowalaText.WarningText>
          <NowalaText.Headline4 style={styles.infoText}>
            Order below and a member of our team will be in touch.
          </NowalaText.Headline4>
          <View style={styles.orderContainer}>
            <NumberSelect {...orderCounter} />
            <NowalaText.Headline2Light>Solar kits</NowalaText.Headline2Light>
          </View>
          <PrimaryButton {...orderConfirmBtn} />
        </Actionsheet.Content>
      )}
    </Actionsheet>
  );
};

export default NewOrderModalView;
