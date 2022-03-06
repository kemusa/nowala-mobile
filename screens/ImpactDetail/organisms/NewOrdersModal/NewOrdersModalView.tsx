import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import MinusButton from '../../../../components/atoms/buttons/MinusButton';
import PlusButton from '../../../../components/atoms/buttons/PlusButton';
import PrimaryButton from '../../../../components/atoms/buttons/PrimaryButton';
import NowalaText from '../../../../components/atoms/text';
import NumberSelect from '../../../../components/molecules/NumberSelect';
import styles from './styles';

const NewOrderModalView: React.FC<NewOrderModalViewProps> = ({
  isOpen,
  onClose,
  orderCounter,
  title,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        <NowalaText.Headline2 style={styles.title}>
          {title}
        </NowalaText.Headline2>
        <NowalaText.WarningText style={styles.warning}>
          We’re now accepting a limited number of orders for Solar Kits with
          Ignite Power
        </NowalaText.WarningText>
        <NowalaText.Headline4 style={styles.infoText}>
          Request below and a member of our team will be in touch.
        </NowalaText.Headline4>
        <View style={styles.orderContainer}>
          <NumberSelect {...orderCounter} />
          <NowalaText.Headline2Light>Solar kits</NowalaText.Headline2Light>
        </View>
        <PrimaryButton text={'Order items'} onPress={() => {}} />
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default NewOrderModalView;
