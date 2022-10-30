import 'react-native-gesture-handler';
import 'expo-dev-client';
import React, { useEffect, useRef, useState } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';
import { fonts, theme } from './theme/theme';
import { firbaseInit } from './services/firebase';
import ServicesContext, { loadServices } from './services';
import { _cacheResourcesAsync } from './utils/cache';
import { analyticsInit } from './services/analytics';
// import * as Updates from 'expo-updates';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const fontsLoaded = fonts();

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef() as any;

  // Firebase Init
  firbaseInit();
  //Analytics Init
  analyticsInit();
  // Enable asset caching
  useEffect(() => {
    _cacheResourcesAsync().then(() => setLoaded(true));
  }, []);

  // useEffect(() => {
  //   updateApp();
  // }, []);

  // const updateApp = async () => {
  //   // const update = await Updates.checkForUpdateAsync();
  //   // if (update.isAvailable) {
  //   //   alert('hey');
  //   //   await Updates.fetchUpdateAsync();
  //   //   // ... notify user of update ...
  //   //   await Updates.reloadAsync();
  //   // }
  //   // alert('start');
  //   Updates.addListener(event => {
  //     // alert('foo');
  //     if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
  //       // alert('bar');
  //       Updates.reloadAsync();
  //     }
  //     // alert('baz');
  //   });
  //   // setUpdated(true);
  // };

  if (!loaded) return <AppLoading />;

  if (!fontsLoaded) return <AppLoading />;

  // if (!updated) return <AppLoading />;

  return (
    <NativeBaseProvider theme={theme}>
      <ServicesContext.Provider value={{ ...loadServices() }}>
        {/* {fontsLoaded && ( */}
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.getCurrentRoute()?.name;
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.getCurrentRoute()?.name;
            if (previousRouteName !== currentRouteName) {
              // console.log('ROUTE NAME: ', currentRouteName);
              // The line below uses the expo-firebase-analytics tracker
              // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
              // Change this line to use another Mobile analytics SDK
              // await Analytics.setCurrentScreen(currentRouteName);
            }

            // Save the current route name for later comparison
            routeNameRef.current = currentRouteName;
          }}>
          <RootNavigator></RootNavigator>
        </NavigationContainer>
        {/* )} */}
      </ServicesContext.Provider>
    </NativeBaseProvider>
  );
}
