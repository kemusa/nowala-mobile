import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import { WalletCtx } from '../../../WalletContext';
import styles from './styles';

const WaitListView: React.FC = ({}) => {
  const { walletSummary } = useContext(WalletCtx);
  const { waitlistNum } = walletSummary;
  return (
    <>
      <NowalaText.Headline2Light style={{ marginLeft: 5, marginBottom: 10 }}>
        Order pending
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                alignItems: 'center',
                width: 50,
                height: 50,
                backgroundColor: '#D7EAFB',
                borderRadius: 50,
                marginRight: 15,
              }}>
              <Image
                source={{
                  uri: 'https://storage.googleapis.com/nowala-public/paper-plane.png',
                }}
                style={styles.image}
              />
            </View>
            <NowalaText.Body1 style={styles.waitlistText}>
              You’re {`#${waitlistNum}`} on the waitlist
            </NowalaText.Body1>
          </View>
          <NowalaText.Headline4 style={styles.headingText}>
            You’re investments are coming soon
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

export default WaitListView;
