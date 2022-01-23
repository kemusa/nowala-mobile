import { Actionsheet } from 'native-base';
import React from 'react';
import { View, ScrollView } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CheckListItem from '../../molecules/CheckListItem';

const ProgressModalView: React.FC<ProgressModalViewProps> = ({
  progress,
  isOpen,
  onClose,
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content
        style={{
          width: '100%',
          alignItems: 'flex-start',
          backgroundColor: 'white',
        }}>
        <View style={{ padding: 20 }}>
          <NowalaText.Headline3>Progress</NowalaText.Headline3>
        </View>
        <ScrollView style={{ width: '100%', paddingTop: 10 }}>
          {progress &&
            progress.map((item, idx) => (
              <Actionsheet.Item
                key={idx}
                h={60}
                style={{ backgroundColor: 'white' }}>
                <CheckListItem title={item.title} complete={item.complete} />
              </Actionsheet.Item>
            ))}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ProgressModalView;
