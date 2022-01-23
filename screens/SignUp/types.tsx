// import { InputFormProps } from '../../../components/organisms/InputForm/types';

import { InputFormConfig } from '../../components/organisms/InputForm/types';

export interface SignUpProps {
  inputFormConfig: InputFormConfig;
  authConfirmTextProps: AuthConfirmTextProps;
}

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
