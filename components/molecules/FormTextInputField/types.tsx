import { Control } from 'react-hook-form';

export interface FormTextInputFieldProps {
  placeholder?: string;
  label: string;
  autoCompleteType?: TextAutoCompleteType;
  secureTextEntry?: boolean;
  control: Control<any, object>;
  name: string;
  rules?: any;
  disabled?: boolean;
}

export type TextAutoCompleteType =
  | 'name'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'email'
  | 'password'
  | 'postal-code'
  | 'street-address'
  | 'tel'
  | 'username'
  | 'off'
  | undefined;
