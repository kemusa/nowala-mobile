import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectsScreen from '../../screens/Projects';
import ProjectDetailsScreen from '../../screens/ProjectDetails';
import { NoAuthStackParamList } from '../types';
import SignUpScreen from '../../screens/SignUp';
import LoginScreen from '../../screens/Login';
import ForgotPasswordScreen from '../../screens/ForgotPassword';
import colors from '../../theme/colors';

const Stack = createStackNavigator<NoAuthStackParamList>();
const { WHITE } = colors;

const NoAuthStack: React.FC = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Login">
      {/* <Screen name="Projects" component={ProjectsScreen}></Screen> */}
      <Screen name="SignUp" component={SignUpScreen}></Screen>
      <Screen name="Login" component={LoginScreen}></Screen>
      <Screen name="ForgotPassword" component={ForgotPasswordScreen}></Screen>
    </Navigator>
  );
};

export default NoAuthStack;
