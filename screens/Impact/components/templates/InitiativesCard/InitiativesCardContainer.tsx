import React from 'react';
import InitiativesCardsView from './InitiativesCardView';

const InitiativesCardsContainer: React.FC<InitiativesCard> = ({
  title,
  icon,
  backgroundUrl,
  onPress,
}) => {
  return (
    <InitiativesCardsView
      title={title}
      icon={icon}
      backgroundUrl={backgroundUrl}
      onPress={onPress}
    />
  );
};

export default InitiativesCardsContainer;
