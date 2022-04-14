import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import InputForm from '../../components/organisms/InputForm';
import NowalaText from '../../components/atoms/text';
import LoginContext from './LoginContext';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const LoginView: React.FC = () => {
  const { inputFormConfig, authConfirmTextProps, goToForgotPassword } =
    useContext(LoginContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <NowalaText.Headline1 style={styles.heading}>
          Log in
        </NowalaText.Headline1>
        <InputForm {...inputFormConfig} />
        <View style={{ width: '100%', alignItems: 'center' }}></View>
        <AuthConfirmText {...authConfirmTextProps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
