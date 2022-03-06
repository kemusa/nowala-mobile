import { View, Text } from 'react-native';
import React, { useState } from 'react';
import MinusButton from '../../atoms/buttons/MinusButton';
import NowalaText from '../../atoms/text';
import PlusButton from '../../atoms/buttons/PlusButton';

const NumberSelect: React.FC<NumberSelect> = ({
  increaseNumber,
  decreaseNumber,
  number,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: 140,
        justifyContent: 'space-between',
        marginRight: 20,
      }}>
      <MinusButton onPress={decreaseNumber} />
      <NowalaText.Headline4>{number}</NowalaText.Headline4>
      <PlusButton onPress={increaseNumber} />
    </View>
  );
};

export default NumberSelect;
