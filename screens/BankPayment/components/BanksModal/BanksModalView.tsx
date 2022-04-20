import { Actionsheet, Box, Button, Icon } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../components/atoms/text';
import styles from './styles';
import * as Linking from 'expo-linking';
import BankButton from '../../../../components/atoms/buttons/BankButton';
import { banks } from './Banks';

const BankModalView: React.FC<BankModalViewProps> = ({ isOpen, onClose }) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.startContainer}>
        <Box style={styles.contentContainer}>
          <View style={styles.header}>
            <NowalaText.Headline1>Select your bank</NowalaText.Headline1>
          </View>
          <NowalaText.Body1 style={{ textAlign: 'center' }}>
            Connect to one of the banks below or open your bank's app to make a
            transfer
          </NowalaText.Body1>
          <View
            style={{
              alignItems: 'center',
              marginTop: 25,
            }}>
            {banks.map((b, idx) => (
              <BankButton
                key={idx}
                bankName={b.bankName}
                iconPath={b.iconPath}
                onPress={() => Linking.openURL(b.appUrl)}
              />
            ))}
          </View>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default BankModalView;
