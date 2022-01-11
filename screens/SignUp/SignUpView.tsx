import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';
import AuthConfirmText from '../../components/molecules/AuthConfirmText';
import InputForm from '../../components/organisms/InputForm';
import NowalaText from '../../components/atoms/text';
import SignUpContext from './SignUpContext';
import styles from './styles';
// import { SignUpViewProps } from './types';

const SignUpView: React.FC = () => {
  const { inputFormConfig, authConfirmTextProps } = useContext(SignUpContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NowalaText.Headline1 style={styles.heading}>
          Become a member
        </NowalaText.Headline1>
        <NowalaText.Body1 style={styles.description}>
          Support projects that change lives and make money while doing it!
        </NowalaText.Body1>
        <InputForm {...inputFormConfig} />
        <AuthConfirmText {...authConfirmTextProps} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpView;
