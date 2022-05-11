import { Control } from 'react-hook-form';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { TextAutoCompleteType } from '../../molecules/FormTextInputField/types';
// import { LightLinkTextProps } from '../../atoms/text/LightLinkText/types';

export interface InputFormConfig {
  fields: InputFieldProps[];
  // lightLinkTextProps?: LightLinkTextProps | null;
  buttonProps: PrimaryButtonProps;
  renderOnSent?: JSX.Element;
  sent?: boolean;
  validationErrors?: any;
  error: { message: string | null };
}

export interface InputFieldProps {
  placeholder?: string;
  label: string;
  autoCompleteType?: TextAutoCompleteType;
  secureTextEntry?: boolean;
  control: Control<any, object>;
  name: string;
  rules?: any;
  disabled?: boolean;
  list?: SelectListItem[];
  // country?: boolean;
  type: 'input' | 'select' | 'country' | 'datepicker';
  onCountrySelect?: (country: Country) => void;
  setDate?: Function;
  date?: Date;
  countryCode?: CountryCode;
  after?: JSX.Element;
}

export interface SelectListItem {
  value: string;
  label: string;
}
