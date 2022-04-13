import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectsScreen from '../../screens/Projects';
import ProjectDetailsScreen from '../../screens/ProjectDetails';
import { NoAuthStackParamList } from '../types';
import SignUpScreen from '../../screens/SignUp';
import LoginScreen from '../../screens/Login';
import colors from '../../theme/colors';

const Stack = createStackNavigator<NoAuthStackParamList>();
const { WHITE } = colors;

const NoAuthStack: React.FC = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Projects">
      <Screen name="Projects" component={ProjectsScreen}></Screen>
      <Screen name="SignUp" component={SignUpScreen}></Screen>
      <Screen name="Login" component={LoginScreen}></Screen>
    </Navigator>
  );
};

export default NoAuthStack;
