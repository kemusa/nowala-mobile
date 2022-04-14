import { InputFormConfig } from '../../components/organisms/InputForm/types';

export interface ForgotPasswordProps {
  inputFormConfig: InputFormConfig;
  requestSent: boolean;
}

export type ForgotPasswordFormData = { email: string };
