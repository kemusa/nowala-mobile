import React from 'react';
import AfricaIcon from '../../components/atoms/icons/AfricanIcon';
import PriceIcon from '../../components/atoms/icons/PriceIcon';
import ProfitIcon from '../../components/atoms/icons/ProfitIcon';
import TimeIcon from '../../components/atoms/icons/TimeIcon';
import { ProjectDetailsScreenProps } from '../../navigation/types';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import ProjectDetailsView from './ProjectDetailsView';

const ProjectDetailsContainer: React.FC<ProjectDetailsScreenProps> = ({
  route,
}) => {
  const { project } = route.params;
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
