import React from 'react';
import styles from './styles';
import FormTextInputField from '../../molecules/FormTextInputField';
import Text from '../../atoms/text';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import { InputFormConfig } from './types';
import { InputFieldProps } from './types';
import { Select, Stack } from 'native-base';
import { COUNTRIES } from '../../../utils/consts/COUNTRIES';
import SelectInputField from '../../molecules/SelectField/SelectField';
import { View } from 'react-native';
import CountrySelect from '../../molecules/CountrySelect';

const InputForm: React.FC<InputFormConfig> = ({
  fields,
  buttonProps,
  renderOnSent,
  sent,
  validationErrors,
  error,
}) => {
  console.log('ERROR', error);
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
          {fields.map((field: InputFieldProps, idx: number) => (
            <View key={idx}>
              {field.type === 'select' && (
                <SelectInputField
                  label={field.label}
                  control={field.control}
                  name={field.name}
                  list={field.list}
                  type={field.type}
                />
              )}
              {field.type === 'input' && (
                <FormTextInputField
                  label={field.label}
                  placeholder={field.placeholder}
                  autoCompleteType={field.autoCompleteType}
                  secureTextEntry={field.secureTextEntry || false}
                  control={field.control}
                  name={field.name}
                  rules={field.rules}
                  type={field.type}
                />
              )}
              {field.type === 'country' && (
                <CountrySelect
                  label={field.label}
                  control={field.control}
                  name={field.name}
                  type={field.type} // todo: remove by fixing the type requirements as this is not needed
                  onCountrySelect={field.onCountrySelect}
                  countryCode={field.countryCode}
                />
              )}
              {field.after && field.after}
            </View>
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
