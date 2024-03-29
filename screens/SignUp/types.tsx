// import { InputFormProps } from '../../../components/organisms/InputForm/types';

import { InputFormConfig } from '../../components/organisms/InputForm/types';

export interface SignUpProps {
  inputFormConfig: InputFormConfig;
  authConfirmTextProps: AuthConfirmTextProps;
}

export type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  country: string;
};
