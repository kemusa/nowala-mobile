import React, { useContext, useEffect, useState } from 'react';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import colors from '../../theme/colors';
import NowalaLogoInverse from '../../components/atoms/icons/NowalaLogoInverse';
import ProjectsView from './ProjectsView';
import { View } from 'native-base';
import { firstProject } from './Projects';
import ServicesContext, { Services } from '../../services';
import { TouchableOpacity } from 'react-native';
import NowalaIcon from '../../components/atoms/icons/NowalaIcon';
import { spec } from './specs';
import { MainTabScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';

const { ITEM_HEIGHT } = spec;

interface ProjectProps extends MainTabScreenProps<'Projects'> {
  user: NowalaUserData;
}

const ProjectsContainer: React.FC<ProjectProps> = ({ navigation, user }) => {
  const { WHITE, BACKGROUND } = colors;
  const { analytics } = useContext(ServicesContext) as Services;
  // const { userId } = user || null;
  // Place Nowala logo in header on component init
  // Only shows if headerShown is set to true in navigator
  // Will not display for tab navigation
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity activeOpacity={0.5}>
          <NowalaIcon />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
      headerRight: () => (
        <NowalaText.LinkText style={{ padding: 10 }} onPress={goToLogin}>
          Login
        </NowalaText.LinkText>
      ),
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor: BACKGROUND,
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.PROJECTS);
  }, []);

  const goToProjectDetails = (project: Project) => {
    navigation.navigate('ProjectDetails', {
      project,
    });
  };

  const goToSignUp = () => {
    navigation.navigate('NoAuthStack', { screen: 'SignUp' });
  };

  const goToLogin = () => {
    navigation.navigate('NoAuthStack', { screen: 'Login' });
  };

  const data: Project[] = [{ ...firstProject }];
  return (
    <ProjectContext.Provider
      value={{
        goToProjectDetails,
        goToLogin,
        goToSignUp,
        user,
        data,
      }}>
      <ProjectsView />
    </ProjectContext.Provider>
  );
};

export default ProjectsContainer;
