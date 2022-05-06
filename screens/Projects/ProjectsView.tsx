import React, { useContext, useRef } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { spec } from './specs';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Shadow } from 'react-native-shadow-2';
import NowalaBrandingCard from './components/NowalaBrandingCard';
import MoreProjectsCard from './components/MoreProjectsCard';
import ProjectCard from './components/ProjectCard';

const ProjectsCardView: React.FC = () => {
  const { goToProjectDetails, goToSignUp, goToLogin, user, data } =
    useContext(ProjectContext);
  const project = data[0];

  const cards = [
    <ProjectCard
      project={project}
      onPress={() => {
        goToProjectDetails(project);
      }}
    />,
    <MoreProjectsCard />,
    <NowalaBrandingCard />,
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        {cards.map((card, idx) => (
          <View
            style={{
              marginLeft: '3%',
              marginRight: '3%',
              marginTop: 15,
              marginBottom: 15,
            }}
            key={idx}>
            {card}
          </View>
        ))}
        <View style={styles.spacer}></View>
      </ScrollView>
      {!user && (
        <View style={styles.buttonContainer}>
          <PrimaryButton text={'Get started'} onPress={goToSignUp} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProjectsCardView;
