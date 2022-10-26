import React from 'react';
import TopUpCardView from './TopUpCardView';

const TopUpCardContainer: React.FC<TopUpCardProps> = ({ openTopUpModal }) => {
  return <TopUpCardView openTopUpModal={openTopUpModal} />;
};

export default TopUpCardContainer;
