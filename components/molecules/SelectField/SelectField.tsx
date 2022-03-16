import React, { useEffect, useState } from 'react';
import { Input, Select } from 'native-base';
import { useController, useWatch } from 'react-hook-form';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { COUNTRIES } from '../../../utils/consts/COUNTRIES';
import { InputFieldProps } from '../../organisms/InputForm/types';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

const SelectInputField: React.FC<InputFieldProps> = ({
  list,
  control,
  name,
  rules,
  label,
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <NowalaText.Body2 style={styles.label}>{label}</NowalaText.Body2>
      <TouchableOpacity
        onPress={() => {
          console.log('FOO');
          setLoading(true);
        }}>
        <ActivityIndicator
          style={{ position: 'absolute', bottom: 7, left: 10 }}
          animating={loading}
        />
        <Select onValueChange={onChange}>
          {list &&
            list.map((item, idx: number) => (
              <Select.Item key={idx} label={item.label} value={item.value} />
            ))}
        </Select>
      </TouchableOpacity>
    </>
  );
};

export default SelectInputField;
