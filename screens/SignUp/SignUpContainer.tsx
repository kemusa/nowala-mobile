import React, { useContext, useEffect, useState } from 'react';
// import NowalaLogo from 'src/components/atoms/icons/NowalaLogo';
import ServicesContext, { Services } from '../../services';
import { SignUpScreenProps } from '../../navigation/types';
import { routes } from '../../navigation/types';
import { _getSignUpError } from '../../utils/errors';
import SignUpView from './SignUpView';
// import { SignUpFormData, SignUpViewProps } from './types';
import regex from '../../utils/consts/REGEX';
import { useForm } from 'react-hook-form';
import SignUpContext from './SignUpContext';
import { SignUpProps, SignUpFormData } from './types';
import { InputFormConfig } from '../../components/organisms/InputForm/types';
import NowalaLogo from '../../components/atoms/icons/NowalaLogo';

const SignUpContainer: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { LOGIN } = routes;
  // todo: make into readonly variable
  const isLogin = false;

  // LoadingStates
  const [emailAuthLoading, setEmailAuthLoading] = useState(false);
  // const [facebookAuthLoading, setFacebookAuthLoading] = useState(false);
  // const [googleAuthLoading, setGoogleAuthLoading] = useState(false);

  // Get services
  const { auth } = useContext(ServicesContext) as Services;

  // Initialize form
  const { EMAIL_REGEX } = regex;
  const NO_LOGIN_ERROR = { message: null as any };
  const [signUpError, setSignUpError] = useState(NO_LOGIN_ERROR);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const nameRules = {
    required: { value: true, message: 'Name is required' },
  };
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
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  const goToLogin = () => {
    navigation.navigate(LOGIN);
  };

  const signUpWithEmailAndPassword = async (data: SignUpFormData) => {
    try {
      const { name, email, password } = data;
      setSignUpError(NO_LOGIN_ERROR);
      setEmailAuthLoading(true);
      await auth.signUpWithEmailAndPassword(name, email, password);
    } catch (error: any) {
      console.error(error);
      setEmailAuthLoading(false);
      displayFormError(error.code);
    }
  };

  // const loginWithFacebook = async () => {
  //   try {
  //     setSignUpError(NO_LOGIN_ERROR);
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
  //     setSignUpError(NO_LOGIN_ERROR);
  //     setGoogleAuthLoading(true);
  //     await auth.signInWithGoogle();
  //     setGoogleAuthLoading(false);
  //   } catch (error: any) {
  //     displayFormError(error.code);
  //     console.error(error);
  //   }
  // };

  const displayFormError = (error: string) => {
    const message = _getSignUpError(error);
    setSignUpError({ message });
  };

  const inputFormConfig: InputFormConfig = {
    fields: [
      {
        placeholder: 'e.g. Jane Doe',
        label: 'Name',
        autoCompleteType: 'name',
        control,
        name: 'name',
        rules: nameRules,
      },
      {
        placeholder: 'e.g. jane.doe@gmail.com',
        label: 'Email',
        autoCompleteType: 'email',
        control,
        name: 'email',
        rules: emailRules,
      },
      {
        label: 'Password',
        autoCompleteType: 'password',
        secureTextEntry: true,
        control,
        name: 'password',
        rules: passwordRules,
      },
      {
        label: 'Confirm Password',
        autoCompleteType: 'password',
        secureTextEntry: true,
        control,
        name: 'password',
        rules: passwordRules,
      },
    ],
    buttonProps: {
      onPress: handleSubmit(signUpWithEmailAndPassword),
      text: 'Sign up',
      loading: emailAuthLoading,
    },
    validationErrors: errors,
    error: signUpError,
  };

  const authConfirmTextProps: AuthConfirmTextProps = {
    isLogin: false,
    onPress: goToLogin,
  };

  return (
    <SignUpContext.Provider value={{ inputFormConfig, authConfirmTextProps }}>
      <SignUpView />
    </SignUpContext.Provider>
  );
};

export default SignUpContainer;
