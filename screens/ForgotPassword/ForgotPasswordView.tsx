import React, { useContext } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import InputForm from '../../components/organisms/InputForm';
import NowalaText from '../../components/atoms/text';
import LoginContext from './ForgotPasswordContext';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
// import { LoginViewProps } from './types';

const LoginView: React.FC = () => {
  const { inputFormConfig, requestSent } = useContext(LoginContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        {requestSent ? (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://storage.googleapis.com/nowala-public/confirm_check_mark.png',
              }}
              style={styles.confirmImage}
            />
            <NowalaText.Headline4 style={styles.title}>
              Password reset email sent!
            </NowalaText.Headline4>
          </View>
        ) : (
          <>
            <NowalaText.Headline1 style={styles.heading}>
              Reset Password
            </NowalaText.Headline1>
            <InputForm {...inputFormConfig} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
