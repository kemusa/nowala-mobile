import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types';
import ProjectsScreen from '../screens/Projects';
import ProjectDetailsScreen from '../screens/ProjectDetails';
import { enableScreens } from 'react-native-screens';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';
import YourOrdersScreen from '../screens/YourOrders';
import ServicesContext, { Services } from '../services';
import { User } from '@firebase/auth';
import colors from '../theme/colors';

enableScreens(false);

const { BACKGROUND } = colors;

const Stack = createStackNavigator<StackParamList>();
const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { auth, analytics } = useContext(ServicesContext) as Services;
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

  // Initialize event handler for user auth changes
  useEffect(() => {
    try {
      analytics.identify(uid);
    } catch (error) {
      console.error(error);
    }
  }, [uid]);

  // Event handler for use auth changes
  const handleAuthChange = async (user: User | null) => {
    user ? setUid(user.uid) : setUid(null);
  };

  return (
    <Navigator initialRouteName="Projects" detachInactiveScreens={false}>
      {uid ? (
        <>
          <Screen name="Dashboard">
            {props => <DashboardScreen {...props} userId={uid} />}
          </Screen>
          <Screen
            name="ProjectDetails"
            options={() => ({
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#fff',
            })}
            component={ProjectDetailsScreen}></Screen>
          <Screen
            name="YourOrders"
            options={{
              headerTitle: '',
              headerStyle: { backgroundColor: BACKGROUND },
            }}>
            {props => <YourOrdersScreen {...props} />}
          </Screen>
        </>
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