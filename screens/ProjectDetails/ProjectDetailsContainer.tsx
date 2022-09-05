import React, { useContext, useEffect, useState } from 'react';
import AfricaIcon from '../../components/atoms/icons/AfricanIcon';
import PriceIcon from '../../components/atoms/icons/PriceIcon';
import ProfitIcon from '../../components/atoms/icons/ProfitIcon';
import TimeIcon from '../../components/atoms/icons/TimeIcon';
import { RootStackScreenProps } from '../../navigation/types';
import ServicesContext, { Services } from '../../services';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import { UNITED_KINGDOM } from '../../utils/consts/COUNTRIES';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import ProjectDetailsView from './ProjectDetailsView';

interface ProjectDetailsProps extends RootStackScreenProps<'ProjectDetails'> {
  user: NowalaUserProfile;
}

const ProjectDetailsContainer: React.FC<ProjectDetailsProps> = ({
  navigation,
  route,
  user,
}) => {
  const { project } = route.params;
  const { analytics } = useContext(ServicesContext) as Services;

  const { userId, email, firstName } = user;

  const isUK = user.country === UNITED_KINGDOM;

  const [canViewOrderModal, setCanViewOrderModal] = useState(false);

  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  // Place Nowala logo in header on component init
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity activeOpacity={0.5} onPress={goToProjects}>
  //         <ChevronLeftIcon color={'#fff'} />
  //       </TouchableOpacity>
  //     ),
  //     // headerStyle: {
  //     //   elevation: 0, // remove header border for android
  //     //   shadowOpacity: 0, // remove header border for ios
  //     //   borderBottomWidth: 0, //remove header border for ios
  //     //   backgroundColor: BACKGROUND,
  //     // },
  //   });
  // }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screen(analyticsScreens.PROJECT_DETAILS);
  }, []);

  const getStatIcon = (stat: string) => {
    switch (stat) {
      case 'price':
        return <PriceIcon />;
      case 'return':
        return <ProfitIcon />;
      case 'time':
        return <TimeIcon />;
      case 'country':
        return <AfricaIcon />;
      default:
        return <AfricaIcon />;
    }
  };

  const openNewOrderModal = () => setCanViewOrderModal(true);
  const closeNewOrderModal = () => setCanViewOrderModal(false);

  // const onOrderSent: OrderCallback = (price: number, paymentRef: string) => {
  //   // temporarily remove bank payment redirect for waitlist functionality
  //   // navigation.navigate('AuthStack', {
  //   //   screen: 'BankPayment',
  //   //   params: { redirectPage: 'Projects', paymentRef, price },
  //   // });
  //   updateHasOrdered(); // todo: replace this by fixing document subscription
  //   navigation.navigate('AuthStack', {
  //     screen: 'Main',
  //     params: { screen: 'WaitList' },
  //   });
  // };

  const goToLogin = () => {
    navigation.navigate('NoAuthStack', {
      screen: 'Login',
    });
  };

  // const goToProjects = () => {
  //   navigation.navigate('Main', { screen: 'Projects' });
  // };

  const ctaOnPress = () => {
    // If the user is logged in open the order modal. If not, prompt them to login
    userId ? openNewOrderModal() : goToLogin();
  };

  return (
    <ProjectDetailsContext.Provider
      value={{
        project,
        getStatIcon,
        userId,
        email,
        projectId,
        canViewOrderModal,
        ctaOnPress,
        closeNewOrderModal,
        // onOrderSent,
        firstName,
        // hasOrdered,
        isUK,
      }}>
      <ProjectDetailsView />
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsContainer;
