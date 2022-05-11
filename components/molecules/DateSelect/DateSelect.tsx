import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import NowalaText from '../../atoms/text';
import styles from './styles';
import { InputFieldProps } from '../../organisms/InputForm/types';
import DateTimePicker from '@react-native-community/datetimepicker';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateSelectModal from './components/DateSelectModal';
import moment from 'moment';

// todo: create separate type
const DateSelect: React.FC<DateSelectField> = ({ label, date, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSelect = () => setIsOpen(true);
  const closeSelect = () => setIsOpen(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const onDateSelect = (event: any, value: Date | undefined) => {
    setDate(value);
    if (Platform.OS === 'android') {
      closeSelect();
    }
  };

  return (
    <>
      <NowalaText.Body2 style={styles.label}>{label}</NowalaText.Body2>
      <TouchableOpacity onPress={openSelect}>
        <View
          style={{
            width: '100%',
            height: 40,
            borderColor: '#E1E1E1',
            borderWidth: 1,
            borderRadius: 6,
            alignItems: 'center',
            padding: 5,
            flexDirection: 'row',
          }}>
          <EvilIcons name="calendar" size={30} color={'#ADADAD'} />
          <NowalaText.Body1>
            {date && moment(date).format('MMMM D, YYYY')}
          </NowalaText.Body1>
        </View>
      </TouchableOpacity>
      <DateSelectModal
        isOpen={isOpen}
        date={date || new Date(Date.now())}
        onClose={onClose}
        onDateSelect={onDateSelect}
        closeSelect={closeSelect}
      />
      {/* <DateTimePicker
        value={date || new Date(Date.now())}
        mode={'date'}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        is24Hour={true}
        onChange={onDateSelect}
        style={{}}
      /> */}
    </>
  );
};

export default DateSelect;
