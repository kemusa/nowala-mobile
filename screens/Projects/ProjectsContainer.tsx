import React from 'react';
import { ProjectsScreenProps } from '../../navigation/types';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import colors from '../../theme/colors';
import NowalaLogoInverse from '../../components/atoms/icons/NowalaLogoInverse';
import ProjectsView from './ProjectsView';
import { View } from 'native-base';

const ProjectsContainer: React.FC<ProjectsScreenProps> = ({ navigation }) => {
  const { WHITE, PRIMARY } = colors;

  const goToProjectDetails = (project: Project) => {
    navigation.navigate('ProjectDetails', { project });
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const data: Project[] = [
    {
      key: '1',
      title: 'Provide Affordable Solar Energy',
      description:
        "We've partnered with Ignite Power SL to help you provide affordable solar power to the rural power in Sierra Leone. When you join this project, you get to sponsor Solar Kits which are directly placed in a home without electricity. The residents pay an afforadable rate each month and the returns are paid to you.",
      image:
        'https://storage.googleapis.com/nowala-public/solar_kit_hero_3.jpg',
      color: '#0C212D',
      stats: {
        price: {
          title: 'Price',
          value: '£60',
          icon: 'price',
        },
        return: { title: 'Return', value: '5-10%', icon: 'return' },
        time: { title: 'Time period', value: '2 years', icon: 'time' },
        country: {
          title: 'Country',
          value: 'Sierra Leone',
          icon: 'country',
        },
      },
      clickable: true,
    },
    {
      key: '2',
      title: 'Our Mission',
      description:
        "We’re focused on helping you become a shareholder in the world's ongoing development by connecting you to social good projects that produce returns",
      color: '#47717F',
      image: 'https://storage.googleapis.com/nowala-public/road_image.png',
      design: (
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            padding: 10,
            margin: 'auto',
            marginTop: 30,
            marginLeft: '5%',
            marginRight: '5%',
            borderColor: WHITE,
            borderWidth: 2,
          }}>
          <NowalaText.Headline1Light style={{ color: WHITE }}>
            MORE
          </NowalaText.Headline1Light>
          <NowalaText.Headline1Light style={{ color: WHITE }}>
            PROJECTS
          </NowalaText.Headline1Light>
          <NowalaText.Headline1Light style={{ color: WHITE }}>
            COMING
          </NowalaText.Headline1Light>
          <NowalaText.Headline1Light style={{ color: WHITE }}>
            SOON
          </NowalaText.Headline1Light>
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
          <NowalaText.Headline3Light
            style={{ color: WHITE, marginTop: 15, marginBottom: 15 }}>
            DISCOVER
          </NowalaText.Headline3Light>
          <NowalaText.Headline3Light style={{ color: WHITE, marginBottom: 15 }}>
            SUPPORT
          </NowalaText.Headline3Light>
          <NowalaText.Headline3Light style={{ color: WHITE, marginBottom: 15 }}>
            EARN
          </NowalaText.Headline3Light>
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
