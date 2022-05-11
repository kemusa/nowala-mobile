import React, { useContext } from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  View,
} from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import InputForm from '../../components/organisms/InputForm';
import NowalaText from '../../components/atoms/text';
import SignUpContext from './SignUpContext';
import styles from './styles';
import DateSelectModal from '../../components/molecules/DateSelect/components/DateSelectModal';
import { Actionsheet } from 'native-base';

const SignUpView: React.FC = () => {
  const { inputFormConfig, authConfirmTextProps } = useContext(SignUpContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={50}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <NowalaText.Headline1 style={styles.heading}>
                Become a member
              </NowalaText.Headline1>
              <NowalaText.Body1 style={styles.description}>
                Support projects that change lives and make money while doing
                it!
              </NowalaText.Body1>
              <InputForm {...inputFormConfig} />
              <AuthConfirmText {...authConfirmTextProps} />
              {/* <View style={{ width: '100%', height: 100 }}></View> */}
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpView;
