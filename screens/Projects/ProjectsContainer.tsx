import React, { useContext, useEffect } from 'react';
import { ProjectsScreenProps } from '../../navigation/types';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import colors from '../../theme/colors';
import NowalaLogoInverse from '../../components/atoms/icons/NowalaLogoInverse';
import ProjectsView from './ProjectsView';
import { View } from 'native-base';
import { firstProject } from './Projects';
import ServicesContext, { Services } from '../../services';

const ProjectsContainer: React.FC<ProjectsScreenProps> = ({ navigation }) => {
  const { WHITE, PRIMARY } = colors;
  const { analytics } = useContext(ServicesContext) as Services;

  // track screen
  useEffect(() => {
    analytics.screen('Projects');
  }, []);

  const goToProjectDetails = (project: Project) => {
    navigation.navigate('ProjectDetails', { project, ref: 'Projects' });
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const data: Project[] = [
    { ...firstProject },
    {
      key: '2',
      title: 'Our Mission',
      description:
        "We’re focused on helping you become a shareholder in the world's ongoing development by connecting you to social good projects that produce returns",
      color: '#20678A',
      image: 'https://storage.googleapis.com/nowala-public/road_image.png',
      design: (
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 'auto',
            position: 'absolute',
            marginTop: 30,
            marginLeft: '5%',
            marginRight: '5%',
            borderColor: WHITE,
            borderWidth: 2,
          }}>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 5 }}>
            MORE
          </NowalaText.Headline2Light>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 5 }}>
            PROJECTS
          </NowalaText.Headline2Light>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 5 }}>
            COMING
          </NowalaText.Headline2Light>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 5 }}>
            SOON
          </NowalaText.Headline2Light>
        </View>
      ),
      clickable: false,
      stats: null,
    },
    {
      key: '3',
      design: (
        <View
          style={{
            width: '90%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 'auto',
            marginTop: 30,
            marginLeft: '5%',
            marginRight: '5%',
          }}>
          <NowalaLogoInverse />
          <NowalaText.Headline2Light
            style={{ color: WHITE, marginTop: 15, marginBottom: 15 }}>
            DISCOVER
          </NowalaText.Headline2Light>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 15 }}>
            SUPPORT
          </NowalaText.Headline2Light>
          <NowalaText.Headline2Light style={{ color: WHITE, marginBottom: 15 }}>
            EARN
          </NowalaText.Headline2Light>
        </View>
      ),
      color:
        'linear-gradient(43.2deg, #475972 23.86%, rgba(49, 87, 140, 0.77) 94.72%)',
      stats: null,
      clickable: false,
    },
  ];

  return (
    <ProjectContext.Provider value={{ goToProjectDetails, goToSignUp, data }}>
      <ProjectsView />
    </ProjectContext.Provider>
  );
};

export default ProjectsContainer;
