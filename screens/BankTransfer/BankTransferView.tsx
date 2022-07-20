import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useCallback, useRef } from 'react';
import styles from './styles';
import NowalaText from '../../components/atoms/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../theme/colors';
import { WebView, WebViewProps } from 'react-native-webview';

const BankTransferView = () => {
  const { TRETIARY } = colors;

  const callbackUrl = 'https://console.tink.com/callback';

  const clientId = '9ebb8f5e4a93418bb96d6014ece637bc';

  const webviewRef = useRef<WebView>(null);

  const handleHttpError = useCallback<NonNullable<WebViewProps['onHttpError']>>(
    event => {
      console.error(event);
    },
    [],
  );

  const handleError = useCallback<NonNullable<WebViewProps['onError']>>(
    event => {
      console.error(event);
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        style={styles.webview}
        containerStyle={styles.container}
        source={{
          uri: `https://link.tink.com/1.0/pay/direct?client_id=${clientId}&redirect_uri=${callbackUrl}&market=GB&locale=en_GB&payment_request_id=6915ab99857fec1e6f2f6c078&iframe=true`,
        }}
        startInLoadingState={true}
        mediaPlaybackRequiresUserAction={true}
        onHttpError={handleHttpError}
        onError={handleError}
        onMessage={m => {
          console.log(m);
        }}
      />
    </SafeAreaView>
  );
};

export default BankTransferView;
