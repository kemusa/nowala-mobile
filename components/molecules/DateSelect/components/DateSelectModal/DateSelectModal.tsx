import { Actionsheet, Box } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import PrimaryButton from '../../../../atoms/buttons/PrimaryButton';

const DateSelectModalView: React.FC<DateSelectModal> = ({
  isOpen,
  date,
  onClose,
  onDateSelect,
  closeSelect,
}) => {
  const dateTimePicker = (
    <DateTimePicker
      value={date}
      mode={'date'}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      is24Hour={true}
      onChange={onDateSelect}
    />
  );
  return (
    <>
      {Platform.OS === 'ios' ? (
        // Render for iOS
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content style={styles.confirmedContainer}>
            <Box style={{ width: '100%' }}>
              {dateTimePicker}
              <PrimaryButton text="Select" onPress={closeSelect} />
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      ) : (
        // Render for Android
        isOpen && dateTimePicker
      )}
    </>
  );
};

export default DateSelectModalView;
