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
        Your impact
      </NowalaText.Headline2Light>
      <CardWrapper>
        {units > 0 ? (
          installed ? (
            <>
              <NowalaText.Subtitle1>
                Thanks to you,{' '}
                {units > 1 ? `${units} homes have` : `${units} home has`}{' '}
                affordable access to electricity.
              </NowalaText.Subtitle1>
              <NowalaText.LinkText2
                onPress={openProgressModal}
                style={{ marginTop: 10 }}>
                View progress
              </NowalaText.LinkText2>
            </>
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
            We are verifying your account. Your impact details will be updated
            within 24 hours.
          </NowalaText.Subtitle1>
        )}
      </CardWrapper>
    </>
  );
};

export default ImpactCardView;
