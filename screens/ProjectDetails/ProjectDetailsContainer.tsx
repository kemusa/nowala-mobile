import React, { useContext, useEffect } from 'react';
import AfricaIcon from '../../components/atoms/icons/AfricanIcon';
import PriceIcon from '../../components/atoms/icons/PriceIcon';
import ProfitIcon from '../../components/atoms/icons/ProfitIcon';
import TimeIcon from '../../components/atoms/icons/TimeIcon';
import { ProjectDetailsScreenProps } from '../../navigation/types';
import ServicesContext, { Services } from '../../services';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import ProjectDetailsView from './ProjectDetailsView';

const ProjectDetailsContainer: React.FC<ProjectDetailsScreenProps> = ({
  route,
}) => {
  const { project, ref } = route.params;
  const { analytics } = useContext(ServicesContext) as Services;

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

  return (
    <ProjectDetailsContext.Provider value={{ project, getStatIcon }}>
      <ProjectDetailsView />
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsContainer;
