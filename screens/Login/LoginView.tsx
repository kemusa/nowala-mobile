import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import InputForm from '../../components/organisms/InputForm';
import NowalaText from '../../components/atoms/text';
import LoginContext from './LoginContext';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
// import { LoginViewProps } from './types';

const LoginView: React.FC = () => {
  const { inputFormConfig, authConfirmTextProps } = useContext(LoginContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <NowalaText.Headline1 style={styles.heading}>
          Log in
        </NowalaText.Headline1>
        <InputForm {...inputFormConfig} />
        <AuthConfirmText {...authConfirmTextProps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
