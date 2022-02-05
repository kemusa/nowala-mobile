import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';

const ProgressModalView: React.FC<OptionsModalViewProps> = ({
  isOpen,
  onClose,
  goToProject,
  openOrdersModal,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content
        style={{
          width: '100%',
          alignItems: 'flex-start',
        }}>
        <Actionsheet.Item onPress={goToProject}>
          <View style={{ flexDirection: 'row' }}>
            <Icons.ProjectIcon></Icons.ProjectIcon>
            <NowalaText.Body1
              style={{
                marginLeft: 5,
                marginTop: 'auto',
                marginBottom: 'auto',
                color: '#585858',
              }}>
              Project details
            </NowalaText.Body1>
          </View>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={openOrdersModal}>
          <View style={{ flexDirection: 'row' }}>
            <Icons.OrderIcon></Icons.OrderIcon>
            <NowalaText.Body1
              style={{
                marginLeft: 5,
                marginTop: 'auto',
                marginBottom: 'auto',
                color: '#585858',
              }}>
              Order details
            </NowalaText.Body1>
          </View>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProgressModalView;
