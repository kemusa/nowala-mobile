import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import NowalaText from '../../../../components/atoms/text';
import colors from '../../../../theme/colors';
import { spec } from '../../specs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Shadow } from 'react-native-shadow-2';
import styles from './styles';

const ProjectCardView: React.FC<ProjectCardProps> = ({ project, onPress }) => {
  return (
    <TouchableOpacity
      style={{ width: '100%' }}
      activeOpacity={0.5}
      onPress={onPress}>
      <Shadow
        distance={3}
        startColor={'#00000020'}
        viewStyle={{ width: '100%' }}
        offset={[0, 1]}
        radius={8}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: project.image }} />
          <View style={{ position: 'absolute', top: 20, right: 20 }}></View>
          {/* If there's a title and description dispalay description portion of card */}
          <View style={styles.cardInfoContainer}>
            <NowalaText.Headline3Light style={styles.title}>
              {project.title}
            </NowalaText.Headline3Light>
            <NowalaText.Body1 style={styles.description} numberOfLines={2}>
              {project.description}
            </NowalaText.Body1>
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default ProjectCardView;
