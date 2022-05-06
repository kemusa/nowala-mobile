import React from 'react';
import { Input } from 'native-base';
import { useController } from 'react-hook-form';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { InputFieldProps } from '../../organisms/InputForm/types';

const FormTextInputField: React.FC<InputFieldProps> = ({
  disabled,
  placeholder,
  label,
  autoCompleteType,
  secureTextEntry,
  control,
  name,
  rules,
}) => {
  const {
    field: { value, onChange, ref },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });

  return (
    <>
      <NowalaText.Body2 style={styles.label}>{label}</NowalaText.Body2>
      <Input
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        autoCompleteType={autoCompleteType}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        isDisabled={disabled}
        ref={ref}
      />
    </>
  );
};

export default FormTextInputField;
