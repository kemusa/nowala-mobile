import React from 'react';
import styles from './styles';
import FormTextInputField from '../../molecules/FormTextInputField';
import Text from '../../atoms/text';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import { InputFormConfig } from './types';
import { FormTextInputFieldProps } from '../../molecules/FormTextInputField/types';
import { Stack } from 'native-base';

const InputForm: React.FC<InputFormConfig> = ({
  fields,
  buttonProps,
  renderOnSent,
  sent,
  validationErrors,
  error,
}) => {
  return (
    <>
      {error.message && (
        // Show firebase/server errors
        <Text.ErrorMessage style={styles.errorText}>
          {error.message}
        </Text.ErrorMessage>
      )}
      {validationErrors &&
        // Show field validation errors
        Object.keys(validationErrors).map((e: any, idx) => (
          <Text.ErrorMessage key={idx} style={styles.errorText}>
            {validationErrors[e].message}
          </Text.ErrorMessage>
        ))}
      {sent && renderOnSent ? (
        // If the form is sent and we have elements to render on sent, render them
        <>{renderOnSent}</>
      ) : (
        // render the form
        <Stack space={3}>
          {fields.map((field: FormTextInputFieldProps, idx: number) => (
            <FormTextInputField
              key={idx}
              label={field.label}
              placeholder={field.placeholder}
              autoCompleteType={field.autoCompleteType}
              secureTextEntry={field.secureTextEntry || false}
              control={field.control}
              name={field.name}
              rules={field.rules}
            />
          ))}
          <PrimaryButton
            disabled={buttonProps.disabled}
            loading={buttonProps.loading}
            onPress={buttonProps.onPress}
            text={buttonProps.text}
          />
        </Stack>
      )}
    </>
  );
};

export default InputForm;
