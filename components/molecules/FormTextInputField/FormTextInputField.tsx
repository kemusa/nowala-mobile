import React from 'react';
import { Input } from 'native-base';
import { useController } from 'react-hook-form';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { FormTextInputFieldProps } from './types';

const FormTextInputField: React.FC<FormTextInputFieldProps> = ({
  disabled,
  placeholder,
  label,
  autoCompleteType,
  secureTextEntry,
  control,
  name,
  rules,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: rules,
  });

  return (
    <>
      <NowalaText.Body2 style={styles.label}>{label}</NowalaText.Body2>
      <Input
        style={styles.textInput}
        placeholder={placeholder}
        value={field.value}
        autoCompleteType={autoCompleteType}
        onChangeText={field.onChange}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        isDisabled={disabled}
      />
    </>
  );
};

export default FormTextInputField;
