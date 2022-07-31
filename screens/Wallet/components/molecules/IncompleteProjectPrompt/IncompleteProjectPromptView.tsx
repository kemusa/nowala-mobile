import React from 'react';
import { View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';

const IncompleteProjectPromptView = () => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Almost there!
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <NowalaText.Subtitle1>
          You’ve joined a project, now you’re just one step away from making an
          impact
        </NowalaText.Subtitle1>
      </View>
    </>
  );
};

export default IncompleteProjectPromptView;
