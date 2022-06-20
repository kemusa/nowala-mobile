import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';
import { fonts, theme } from './theme/theme';
import { firbaseInit } from './services/firebase';
import ServicesContext, { loadServices } from './services';
import { _cacheResourcesAsync } from './utils/cache';
import { analyticsInit } from './services/analytics';
import * as Updates from 'expo-updates';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const fontsLoaded = fonts();

  // Firebase Init
  firbaseInit();
  //Analytics Init
  analyticsInit();
  // Enable asset caching
  useEffect(() => {
    _cacheResourcesAsync().then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    updateApp();
  }, []);

  const updateApp = async () => {
    // const update = await Updates.checkForUpdateAsync();
    // if (update.isAvailable) {
    //   alert('hey');
    //   await Updates.fetchUpdateAsync();
    //   // ... notify user of update ...
    //   await Updates.reloadAsync();
    // }
    // alert('start');
    Updates.addListener(event => {
      // alert('foo');
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        // alert('bar');
        Updates.reloadAsync();
      }
      // alert('baz');
    });
    // setUpdated(true);
  };

  if (!loaded) return <AppLoading />;

  if (!fontsLoaded) return <AppLoading />;

  // if (!updated) return <AppLoading />;

  return (
    <NativeBaseProvider theme={theme}>
      <ServicesContext.Provider value={{ ...loadServices() }}>
        {/* {fontsLoaded && ( */}
        <NavigationContainer>
          <RootNavigator></RootNavigator>
        </NavigationContainer>
        {/* )} */}
      </ServicesContext.Provider>
    </NativeBaseProvider>
  );
}
