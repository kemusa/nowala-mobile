import React, { useContext, useEffect, useState } from 'react';
import ServicesContext, { Services } from '../../services';
import { _getLoginError } from '../../utils/errors';
import LoginView from './ForgotPasswordView';
import regex from '../../utils/consts/REGEX';
import { useForm } from 'react-hook-form';
import { InputFormConfig } from '../../components/organisms/InputForm/types';
import NowalaLogo from '../../components/atoms/icons/NowalaLogo';
import { NoAuthStackScreenProps } from '../../navigation/types';
import { ForgotPasswordFormData } from './types';
import ForgotPasswordContext from './ForgotPasswordContext';
import { cos } from 'react-native-reanimated';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';

const ForgotPasswordContainer: React.FC<
  NoAuthStackScreenProps<'ForgotPassword'>
> = ({ navigation }) => {
  // LoadingStates
  const [loading, setLoading] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

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
  } = useForm<ForgotPasswordFormData>();

  const emailRules = {
    required: { value: true, message: 'Email is required' },
    pattern: { value: EMAIL_REGEX, message: 'Not a valid email' },
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
    analytics.screen(analyticsScreens.FORGOT_PASSWORD);
  }, []);

  const sendPasswordResetEmail = async (data: ForgotPasswordFormData) => {
    try {
      const { email } = data;
      setLoginError(NO_LOGIN_ERROR);
      setLoading(true);
      await auth.passwordReset(email);
      analytics.track(analyticsEvents.RESET_PASSWORD);
      setRequestSent(true);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } catch (error: any) {
      setLoading(false);
      displayFormError(error.code);
    }
  };

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
    ],
    buttonProps: {
      onPress: handleSubmit(sendPasswordResetEmail),
      text: 'Reset Password',
      loading: loading,
    },
    validationErrors: errors,
    error: LoginError,
  };

  return (
    <ForgotPasswordContext.Provider value={{ inputFormConfig, requestSent }}>
      <LoginView />
    </ForgotPasswordContext.Provider>
  );
};

export default ForgotPasswordContainer;
