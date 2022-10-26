import {
  Actionsheet,
  Alert,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import NowalaText from '../../atoms/text';
import NumberSelect from '../../molecules/NumberSelect';
import FormTextInputField from '../../molecules/FormTextInputField';
import styles from './styles';
import { productMap } from '../../../utils/consts/DATA';

const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = useState(0);
  const subscriptions = useRef([]);

  useEffect(() => {
    subscriptions.current = [
      Keyboard.addListener('keyboardDidHide', e => setBottom(0)),
      Keyboard.addListener('keyboardDidShow', e => {
        if (Platform.OS === 'android') {
          setBottom(e.endCoordinates.height);
        } else {
          if (e && e.startCoordinates) {
            setBottom(
              Math.max(
                e.startCoordinates.height,
                e.endCoordinates.height,
              ) as any,
            );
          }
        }
      }),
    ] as any;

    return () => {
      subscriptions.current.forEach((subscription: any) => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);

  return bottom;
};

const NewOrderModalView: React.FC<NewOrdersModalViewProps> = ({
  isOpen,
  onClose,
  handleValueChange,
  // orderCounter,
  title,
  orderConfirmBtn,
  orderConfirmed,
  input,
  units,
  inputRef,
}) => {
  const bottomInset = useKeyboardBottomInset();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      {orderConfirmed ? (
        <Actionsheet.Content
        // style={styles.confirmedContainer}
        >
          <Image
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/confirm_check_mark.png',
            }}
            style={styles.confirmImage}
          />
          {/* <NowalaText.Headline4 style={styles.title}>
            Thank you for your order!
          </NowalaText.Headline4> */}
          <NowalaText.Headline4 style={{ marginBottom: 50 }}>
            Just one more step...
          </NowalaText.Headline4>
        </Actionsheet.Content>
      ) : (
        <Actionsheet.Content style={styles.startContainer} bottom={bottomInset}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <ScrollView>
                <Box style={styles.contentContainer}>
                  <View style={styles.header}>
                    <NowalaText.Headline3>
                      Top up to impact lives
                    </NowalaText.Headline3>
                  </View>
                  <NowalaText.Headline2Light style={styles.title}>
                    {title}
                  </NowalaText.Headline2Light>
                  <View style={{ marginBottom: 25 }}>
                    <NowalaText.Body2>Amount you're investing</NowalaText.Body2>
                    <Stack>
                      <InputGroup style={{ width: '100%' }}>
                        <InputLeftAddon children={'£'} />
                        <Input
                          style={{ width: '100%' }}
                          w={{
                            base: Dimensions.get('window').width - 65,
                            md: '100%',
                          }}
                          keyboardType="numeric"
                          value={input}
                          onChangeText={handleValueChange}
                          ref={inputRef}
                        />
                      </InputGroup>
                    </Stack>
                  </View>
                </Box>
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#E9F1F5',
                    // marginLeft: -20,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      borderWidth: 0.5,
                      borderColor: '#000',
                      borderRadius: 50,
                      marginLeft: 20,
                      marginRight: 10,
                    }}
                    source={{
                      uri: productMap['solar_kits_ignite_power_sl'].iconUri,
                    }}
                  />
                  <Text>
                    <NowalaText.Subtitle1>You get </NowalaText.Subtitle1>
                    <NowalaText.Body2 style={{ fontWeight: '700' }}>
                      {units > 1 && `${units} solar panel kits${' '}`}
                      {units == 0 && `${units} solar panel kits${' '}`}
                      {units == 1 && `${units} solar panel kit${' '}`}
                    </NowalaText.Body2>
                    <NowalaText.Subtitle1>
                      with this amount
                    </NowalaText.Subtitle1>
                  </Text>
                </View>
                <Box style={styles.contentContainer}>
                  <View style={{ marginTop: 15 }}>
                    <NowalaText.Body1>
                      Each solar panel kit goes directly to a home without
                      electricity and will earn an estimated 4-5% annual return
                      for 2 years
                    </NowalaText.Body1>
                  </View>
                  <View style={{ height: 100 }}></View>
                  {/* <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  alignSelf: 'center',
                }}> */}
                  {/* </View> */}
                  {/* <View style={{ height: 50 }}></View> */}
                </Box>
              </ScrollView>
              <PrimaryButton {...orderConfirmBtn} />
            </>
          </TouchableWithoutFeedback>
        </Actionsheet.Content>
      )}
    </Actionsheet>
  );
};

export default NewOrderModalView;
