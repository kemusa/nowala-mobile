import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import ActionButton from '../../../../../components/atoms/buttons/ActionButton';
import { WalletCtx } from '../../../WalletContext';

const TopUpCardView: React.FC<TopUpCardProps> = ({ openTopUpModal }) => {
  // const { openTopUpModal } = useContext(WalletCtx);
  return (
    <>
      <NowalaText.Headline2Light style={styles.title}>
        Get started
      </NowalaText.Headline2Light>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <NowalaText.Headline2 style={styles.headingText}>
            Top up to start changing lives
          </NowalaText.Headline2>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/nowala-public/impact_coins.png',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.bottomBarContainer}>
          <NowalaText.Body2 style={styles.bottomBarText}>
            Once you load your cash we’ll start matching it to people in need
          </NowalaText.Body2>
          <View style={styles.buttonContainer}>
            <ActionButton onPress={openTopUpModal} text="Start" />
          </View>
        </View>
      </View>
    </>
  );
};

export default TopUpCardView;
