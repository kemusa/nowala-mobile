import React, { useContext, useEffect, useState } from 'react';
import AfricaIcon from '../../components/atoms/icons/AfricanIcon';
import PriceIcon from '../../components/atoms/icons/PriceIcon';
import ProfitIcon from '../../components/atoms/icons/ProfitIcon';
import TimeIcon from '../../components/atoms/icons/TimeIcon';
import { ProjectDetailsScreenProps } from '../../navigation/RootNavigatorTypes';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import ProjectDetailsView from './ProjectDetailsView';

const ProjectDetailsContainer: React.FC<ProjectDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { project, ref, email, userId } = route.params;
  const { analytics } = useContext(ServicesContext) as Services;

  const [canViewOrderModal, setCanViewOrderModal] = useState(false);

  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  // track screen
  useEffect(() => {
    analytics.screenWithProperties('Project Details', { ref });
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

  const onOrderSent = () => {
    navigation.navigate('BankPayment', { redirectPage: 'Account' });
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

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
        onOrderSent,
      }}>
      <ProjectDetailsView />
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsContainer;
