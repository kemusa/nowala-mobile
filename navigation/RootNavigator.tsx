import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types';
import ProjectsScreen from '../screens/Projects';
import ProjectDetailsScreen from '../screens/ProjectDetails';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';
import ServicesContext, { Services } from '../services';
import { User } from '@firebase/auth';

enableScreens(false);

const Stack = createStackNavigator<StackParamList>();
// const Stack = createSharedElementStackNavigator();
const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { auth } = useContext(ServicesContext) as Services;
  const [uid, setUid] = useState(null as any);

  // Initialize event handler for user auth changes
  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthChange(handleAuthChange);
      return unsubscribe;
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Event handler for use auth changes
  const handleAuthChange = async (user: User | null) => {
    user ? setUid(user.uid) : setUid(null);
    console.log('AUTH', user?.uid);
  };

  return (
    <Navigator initialRouteName="Projects" detachInactiveScreens={false}>
      {uid ? (
        <Screen name="Dashboard" component={DashboardScreen}></Screen>
      ) : (
        <>
          <Screen
            name="Projects"
            component={ProjectsScreen}
            options={{ headerShown: false }}></Screen>
          <Screen
            name="ProjectDetails"
            options={() => ({
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#fff',
              gestureEnabled: false,
              transitionSpec: {
                open: {
                  animation: 'timing',
                  config: { duration: 500, delay: 1 },
                },
                close: { animation: 'timing', config: { duration: 0 } },
              },
            })}
            component={ProjectDetailsScreen}></Screen>
          <Screen name="SignUp" component={SignUpScreen}></Screen>
          <Screen name="Login" component={LoginScreen}></Screen>
        </>
      )}
    </Navigator>
  );
};

export default RootNavigator;
