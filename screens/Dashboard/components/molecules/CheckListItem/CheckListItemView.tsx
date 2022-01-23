import { Checkbox } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';

const CheckListItemView: React.FC<CheckListItemProps> = ({
  title,
  complete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.taskConfirm}>
        {complete && (
          <Checkbox
            accessibilityLabel={title}
            value=""
            isChecked
            isReadOnly
            colorScheme={'blue'}></Checkbox>
        )}
      </View>
      <NowalaText.Body1 style={styles.title}>{title}</NowalaText.Body1>
    </View>
  );
};

export default CheckListItemView;
