import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { ImpactCtx } from '../../../ImpactContext';
import styles from './styles';

const ImpactWaitListCardView: React.FC = ({}) => {
  const { waitlistNum } = useContext(ImpactCtx);
  return (
    <>
      <NowalaText.Headline2Light style={{ marginLeft: 5, marginBottom: 10 }}>
        Impact pending
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://storage.googleapis.com/nowala-public/ignite_happy_child.png',
              }}
              style={styles.image}
            />
            <View style={{ justifyContent: 'flex-end' }}>
              <NowalaText.Body1 style={styles.waitlistText}>
                You’re {`#${waitlistNum}`} on the waitlist
              </NowalaText.Body1>
            </View>
          </View>
          <NowalaText.Headline4 style={styles.headingText}>
            Your impact is coming soon
          </NowalaText.Headline4>
          <NowalaText.Body1>
            Due to high order volumes, some orders are taking longer than usual
            to process. We’ll notify you one week before your funds are invested
          </NowalaText.Body1>
        </View>
      </View>
    </>
  );
};

export default ImpactWaitListCardView;
