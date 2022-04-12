import { Actionsheet, Box } from 'native-base';
import React from 'react';
import { Image, View } from 'react-native';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import NowalaText from '../../atoms/text';
import NumberSelect from '../../molecules/NumberSelect';
import styles from './styles';

const NewOrderModalView: React.FC<NewOrdersModalViewProps> = ({
  isOpen,
  onClose,
  orderCounter,
  title,
  orderConfirmBtn,
  orderConfirmed,
  userTotalPrice,
  projectCurrency,
  projectTotalPrice,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      {orderConfirmed ? (
        <Actionsheet.Content style={styles.confirmedContainer}>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/confirm_check_mark.png',
            }}
            style={styles.confirmImage}
          />
          <NowalaText.Headline4 style={styles.title}>
            Thank you for your order!
          </NowalaText.Headline4>
          <NowalaText.Subtitle1 style={{ marginBottom: 50 }}>
            Just one more step...
          </NowalaText.Subtitle1>
        </Actionsheet.Content>
      ) : (
        <Actionsheet.Content style={styles.startContainer}>
          <Box style={styles.contentContainer}>
            <View style={styles.header}>
              <Image
                source={{
                  uri: 'https://storage.googleapis.com/nowala-public/solar_panel_kit.png',
                }}
                style={styles.headerImage}
              />
              <NowalaText.Headline1>Solar panel kits</NowalaText.Headline1>
            </View>
            <NowalaText.Headline2Light style={styles.title}>
              {title}
            </NowalaText.Headline2Light>
            <NowalaText.Headline4 style={styles.infoText}>
              Order below and we'll be in touch.
            </NowalaText.Headline4>
            <NowalaText.WarningText style={styles.warning}>
              Available in limited quantities
            </NowalaText.WarningText>
            <View style={styles.pricingContainer}>
              <View>
                <NowalaText.Headline2>Total</NowalaText.Headline2>
              </View>
              <View style={styles.pricingDivider}></View>
              <View>
                <NowalaText.Headline2Light>
                  {`£${userTotalPrice}`}
                </NowalaText.Headline2Light>
                <NowalaText.Subtitle1>{`${projectCurrency} ${projectTotalPrice}`}</NowalaText.Subtitle1>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <NumberSelect {...orderCounter} />
            </View>
          </Box>
          {/* </View> */}
          <PrimaryButton {...orderConfirmBtn} />
        </Actionsheet.Content>
      )}
    </Actionsheet>
  );
};

export default NewOrderModalView;
