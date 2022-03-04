import React from 'react';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import styles from './styles';

const ImpactComingView: React.FC<ImpactCardProps> = ({
  units,
  openProgressModal,
}) => {
  return (
    <>
      <CardWrapper>
        <NowalaText.Subtitle1>
          Soon, {units > 1 ? `${units} homes` : `${units} home`} will have
          affordable access to electricity, thanks to you.
        </NowalaText.Subtitle1>
        <NowalaText.LinkText2
          onPress={openProgressModal}
          style={{ marginTop: 10 }}>
          View progress
        </NowalaText.LinkText2>
      </CardWrapper>
    </>
  );
};

export default ImpactComingView;
