// import { InputFormProps } from '../../../components/organisms/InputForm/types';

import { InputFormConfig } from '../../components/organisms/InputForm/types';

export interface LoginProps {
  inputFormConfig: InputFormConfig;
  authConfirmTextProps: AuthConfirmTextProps;
  goToForgotPassword: () => void;
}

export type LoginFormData = { name: string; email: string; password: string };
