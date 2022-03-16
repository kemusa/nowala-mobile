import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types';
import ProjectsScreen from '../screens/Projects';
import ProjectDetailsScreen from '../screens/ProjectDetails';
import { enableScreens } from 'react-native-screens';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';

enableScreens(false);

const Stack = createStackNavigator<StackParamList>();

const UnauthenticatedScreens = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Projects" detachInactiveScreens={false}>
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
        })}
        component={ProjectDetailsScreen}></Screen>
      <Screen name="SignUp" component={SignUpScreen}></Screen>
      <Screen name="Login" component={LoginScreen}></Screen>
    </Navigator>
  );
};

export default UnauthenticatedScreens;
