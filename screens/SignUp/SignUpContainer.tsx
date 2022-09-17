import React, { useContext, useEffect, useState } from 'react';
import ServicesContext, { Services } from '../../services';
import { _getSignUpError } from '../../utils/errors';
import SignUpView from './SignUpView';
import regex from '../../utils/consts/REGEX';
import { useForm } from 'react-hook-form';
import SignUpContext from './SignUpContext';
import { SignUpFormData } from './types';
import { InputFormConfig } from '../../components/organisms/InputForm/types';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { NoAuthStackScreenProps } from '../../navigation/types';
import {
  analyticsEvents,
  analyticsScreens,
} from '../../utils/consts/ANALYTICS';
import moment from 'moment';

const SignUpContainer: React.FC<NoAuthStackScreenProps<'SignUp'>> = ({
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

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.SIGN_UP);
  }, []);

  // Initialize form
  const { EMAIL_REGEX, PASSWORD_REGEX } = regex;
  const NO_LOGIN_ERROR = { message: null as any };
  const [signUpError, setSignUpError] = useState(NO_LOGIN_ERROR);
  const [country, setCountry] = useState('United Kingdom');
  const [countryCode, setCountryCode] = useState('GB' as CountryCode);
  const [date, setDate] = useState(null as any as Date);

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ mode: 'onChange' });

  // const password = useWatch({ control, name: 'password' });

  const nameRules = {
    required: { value: true, message: 'Name is required' },
  };

  const countryRules = {
    required: { value: true, message: 'Country is required' },
  };

  const dateRules = {
    required: { value: true, message: 'Date of birth is required' },
  };

  const emailRules = {
    required: { value: true, message: 'Email is required' },
    pattern: { value: EMAIL_REGEX, message: 'Not a valid email' },
  };
  const passwordRules = {
    required: { value: true, message: 'Password is required' },
    pattern: {
      value: PASSWORD_REGEX,
      message:
        'Your password must have 6-16 characters, at least one number, and special character',
    },
  };
  // todo: add confirmation rule
  const confirmPasssRules = {
    required: { value: true, message: 'Confirm password required' },
    // Check if password field matches the passwordConfirm fielf
    validate: () => {
      const { password, passwordConfirm } = getValues();
      return password === passwordConfirm || 'Passwords must match';
    },
  };

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogoSmall />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const onCountrySelect = (country: Country) => {
    setCountry(country.name as string);
    setCountryCode(country.cca2);
  };

  // const onDateSelect = (event: Event, value: Date) => {
  //   setDate(value);
  // };

  const signUpWithEmailAndPassword = async (data: SignUpFormData) => {
    try {
      const { firstName, lastName, email, password } = data;
      setSignUpError(NO_LOGIN_ERROR);
      setEmailAuthLoading(true);
      const dob = moment(date).format('YYYY-MM-DD');
      await auth.signUpWithEmailAndPassword(
        firstName,
        lastName,
        email,
        password,
        country,
        dob,
      );
      analytics.track(analyticsEvents.SIGNED_UP);
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
        placeholder: 'e.g. Jane',
        label: 'First Name',
        autoCompleteType: 'name',
        control,
        name: 'firstName',
        rules: nameRules,
        type: 'input',
      },
      {
        placeholder: 'e.g. Jackson',
        label: 'Last Name',
        autoCompleteType: 'name',
        control,
        name: 'lastName',
        rules: nameRules,
        type: 'input',
      },
      {
        label: 'Country of residence',
        control,
        // country: true,
        name: 'country',
        rules: countryRules,
        type: 'country',
        onCountrySelect,
        countryCode,
      },
      {
        label: 'Date of birth',
        control,
        name: 'country',
        rules: dateRules,
        type: 'datepicker',
        date,
        setDate,
        countryCode,
      },
      {
        placeholder: 'e.g. jane.jackson@gmail.com',
        label: 'Email',
        autoCompleteType: 'email',
        control,
        name: 'email',
        rules: emailRules,
        type: 'input',
      },
      {
        label: 'Password',
        autoCompleteType: 'password-new',
        textInputType: 'newPassword',
        secureTextEntry: true,
        control,
        name: 'password',
        rules: passwordRules,
        type: 'input',
      },
      {
        label: 'Confirm password',
        autoCompleteType: 'password',
        secureTextEntry: true,
        control,
        name: 'passwordConfirm',
        rules: confirmPasssRules,
        type: 'input',
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
