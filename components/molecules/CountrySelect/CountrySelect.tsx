import React from 'react';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { InputFieldProps } from '../../organisms/InputForm/types';
import CountryPicker from 'react-native-country-picker-modal';
import { View } from 'react-native';

// todo: create separate type
const CountrySelect: React.FC<InputFieldProps> = ({
  label,
  onCountrySelect,
  countryCode,
}) => {
  return (
    <>
      <NowalaText.Body2 style={styles.label}>{label}</NowalaText.Body2>
      <View
        style={{
          borderColor: '#E1E1E1',
          borderWidth: 1,
          borderRadius: 4,
          padding: 2,
        }}>
        <CountryPicker
          countryCode={countryCode || 'GB'}
          withCallingCode={false}
          withFilter={true}
          withFlag={true}
          onSelect={onCountrySelect}
          withCountryNameButton={true}
        />
      </View>
    </>
  );
};

export default CountrySelect;
