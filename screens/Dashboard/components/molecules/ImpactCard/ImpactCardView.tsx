import React from 'react';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import styles from './styles';

const ImpactCardView: React.FC<ImpactCardProps> = ({
  units,
  installed,
  openProgressModal,
}) => {
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Your Impact
      </NowalaText.Headline2Light>
      <CardWrapper>
        {units > 0 ? (
          installed ? (
            <NowalaText.Subtitle1>
              Thanks to you,{' '}
              {units > 1 ? `${units} homes have` : `${units} home has`}{' '}
              affordable access to electricity.
            </NowalaText.Subtitle1>
          ) : (
            <>
              <NowalaText.Subtitle1>
                Soon, {units > 1 ? `${units} homes` : `${units} home`} will have
                affordable access to electricity.
              </NowalaText.Subtitle1>
              <NowalaText.LinkText2
                onPress={openProgressModal}
                style={{ marginTop: 10 }}>
                View progress
              </NowalaText.LinkText2>
            </>
          )
        ) : (
          <NowalaText.Subtitle1>
            We are processing your order. Soon your investment will provide
            affordable access to electricity for 1 or more homes in Sierra
            Leone.
          </NowalaText.Subtitle1>
        )}
      </CardWrapper>
    </>
  );
};

export default ImpactCardView;
