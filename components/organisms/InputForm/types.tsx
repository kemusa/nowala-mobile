import { FormTextInputFieldProps } from '../../../components/molecules/FormTextInputField/types';
// import { LightLinkTextProps } from '../../atoms/text/LightLinkText/types';

export interface InputFormConfig {
  fields: FormTextInputFieldProps[];
  // lightLinkTextProps?: LightLinkTextProps | null;
  buttonProps: PrimaryRoundButtonProps;
  renderOnSent?: JSX.Element;
  sent?: boolean;
  validationErrors?: any;
  error: { message: string | null };
}
