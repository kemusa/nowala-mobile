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

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const fontsLoaded = fonts();

  // Firebase Init
  firbaseInit();
  //Analytics Init
  analyticsInit();
  // Enable asset caching
  useEffect(() => {
    _cacheResourcesAsync().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <ServicesContext.Provider value={{ ...loadServices() }}>
        {fontsLoaded && (
          <NavigationContainer>
            <RootNavigator></RootNavigator>
          </NavigationContainer>
        )}
      </ServicesContext.Provider>
    </NativeBaseProvider>
  );
}
