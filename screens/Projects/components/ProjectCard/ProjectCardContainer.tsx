import React from 'react';
import ProjectCardView from './ProjectCardView';

const ProjectCardContainer: React.FC<ProjectCardProps> = ({
  project,
  onPress,
}) => {
  return <ProjectCardView project={project} onPress={onPress} />;
};

export default ProjectCardContainer;
