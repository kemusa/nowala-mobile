import { Actionsheet } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Icons from '../../../../../components/atoms/icons';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';

const ProgressModalView: React.FC<OptionsModalViewProps> = ({
  isOpen,
  onClose,
  goToProject,
  openOrdersModal,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        <Actionsheet.Item onPress={goToProject}>
          <View style={styles.itemContainer}>
            <Icons.ProjectIcon></Icons.ProjectIcon>
            <NowalaText.Body1 style={styles.itemText}>
              Project details
            </NowalaText.Body1>
          </View>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProgressModalView;
