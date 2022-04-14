import React, { useContext, useEffect, useState } from 'react';
// import NowalaLogo from 'src/components/atoms/icons/NowalaLogo';
import ServicesContext, { Services } from '../../services';
import { _getLoginError } from '../../utils/errors';
import LoginView from './LoginView';
// import { LoginFormData, LoginViewProps } from './types';
import regex from '../../utils/consts/REGEX';
import { useForm } from 'react-hook-form';
import LoginContext from './LoginContext';
import { LoginFormData } from './types';
import { InputFormConfig } from '../../components/organisms/InputForm/types';
import NowalaLogo from '../../components/atoms/icons/NowalaLogo';
import { NoAuthStackScreenProps } from '../../navigation/types';
import NowalaText from '../../components/atoms/text';

const LoginContainer: React.FC<NoAuthStackScreenProps<'Login'>> = ({
  navigation,
}) => {
  // todo: make into readonly variable
  const isLogin = false;

  // LoadingStates
  const [emailAuthLoading, setEmailAuthLoading] = useState(false);
  // const [facebookAuthLoading, setFacebookAuthLoading] = useState(false);
  // const [googleAuthLoading, setGoogleAuthLoading] = useState(false);

  // Get services
  const { auth, analytics } = useContext(ServicesContext) as Services;

  // Initialize form
  const { EMAIL_REGEX } = regex;
  const NO_LOGIN_ERROR = { message: null as any };
  const [LoginError, setLoginError] = useState(NO_LOGIN_ERROR);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const emailRules = {
    required: { value: true, message: 'Email is required' },
    pattern: { value: EMAIL_REGEX, message: 'Not a valid email' },
  };
  const passwordRules = {
    required: { value: true, message: 'Password is required' },
  };

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogo />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screen('Login');
  }, []);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const LoginWithEmailAndPassword = async (data: LoginFormData) => {
    try {
      const { name, email, password } = data;
      setLoginError(NO_LOGIN_ERROR);
      setEmailAuthLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      analytics.track('Signed In');
    } catch (error: any) {
      setEmailAuthLoading(false);
      displayFormError(error.code);
    }
  };

  // const loginWithFacebook = async () => {
  //   try {
  //     setLoginError(NO_LOGIN_ERROR);
  //     setFacebookAuthLoading(true);
  //     await auth.signInWithFacebook();
  //     setFacebookAuthLoading(false);
  //   } catch (error: any) {
  //     displayFormError(error.code);
  //     console.error(error);
  //   }
  // };

  // const loginWithGoogle = async () => {
  //   try {
  //     setLoginError(NO_LOGIN_ERROR);
  //     setGoogleAuthLoading(true);
  //     await auth.signInWithGoogle();
  //     setGoogleAuthLoading(false);
  //   } catch (error: any) {
  //     displayFormError(error.code);
  //     console.error(error);
  //   }
  // };

  const displayFormError = (error: string) => {
    const message = _getLoginError(error);
    setLoginError({ message });
  };

  const inputFormConfig: InputFormConfig = {
    fields: [
      {
        placeholder: 'e.g. jane.doe@gmail.com',
        label: 'Email',
        autoCompleteType: 'email',
        control,
        name: 'email',
        rules: emailRules,
        type: 'input',
      },
      {
        label: 'Password',
        autoCompleteType: 'password',
        secureTextEntry: true,
        control,
        name: 'password',
        rules: passwordRules,
        type: 'input',
        after: (
          <NowalaText.LinkText
            style={{ marginTop: 10 }}
            onPress={goToForgotPassword}>
            Forgot password?
          </NowalaText.LinkText>
        ),
      },
    ],
    buttonProps: {
      onPress: handleSubmit(LoginWithEmailAndPassword),
      text: 'Log in',
      loading: emailAuthLoading,
    },
    validationErrors: errors,
    error: LoginError,
  };

  const authConfirmTextProps: AuthConfirmTextProps = {
    isLogin: true,
    onPress: goToSignUp,
  };

  return (
    <LoginContext.Provider
      value={{ inputFormConfig, authConfirmTextProps, goToForgotPassword }}>
      <LoginView />
    </LoginContext.Provider>
  );
};

export default LoginContainer;
