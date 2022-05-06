import { Actionsheet } from 'native-base';
import React from 'react';
import { View, ScrollView } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CheckListItem from '../../molecules/CheckListItem';
import styles from './styles';

const ProgressModalView: React.FC<ProgressModalViewProps> = ({
  progress,
  isOpen,
  onClose,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content style={styles.container}>
        <View style={styles.titleContainer}>
          <NowalaText.Headline3>Progress</NowalaText.Headline3>
        </View>
        <ScrollView style={styles.listContainer}>
          {progress &&
            progress.map((item, idx) => (
              <Actionsheet.Item key={idx} h={60} style={styles.item}>
                <CheckListItem title={item.title} complete={item.complete} />
              </Actionsheet.Item>
            ))}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProgressModalView;
