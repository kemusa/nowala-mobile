import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './RootNavigatorTypes';
import ProjectsScreen from '../screens/Projects';
import ProjectDetailsScreen from '../screens/ProjectDetails';
import { enableScreens } from 'react-native-screens';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import ImpactDetailScreen from '../screens/ImpactDetail';
import YourOrdersScreen from '../screens/YourOrders';
import AccountPendingScreen from '../screens/AccountPending';
import BottomNavigator from './BottomNavigator';
import NewUserBottomNavigator from './NewUserBottomNavigator';
import ServicesContext, { Services } from '../services';
import { User } from '@firebase/auth';
import colors from '../theme/colors';
import DrawerNavigator from './DrawerNavigator';
import BankPayment from '../screens/BankPayment';

enableScreens(false);

const { BACKGROUND, WHITE } = colors;

const Stack = createStackNavigator<StackParamList>();

const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { auth, analytics, db } = useContext(ServicesContext) as Services;
  const [uid, setUid] = useState(null as any);
  const [email, setEmail] = useState(null as any);
  const [onboarded, setOnboarded] = useState(true);

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
      if (uid) analytics.identify(uid);
    } catch (error) {
      console.error(error);
    }
  }, [uid]);

  const setUser = async (uid: string, email: string | null) => {
    try {
      const doc = await db.findById(`users/${uid}`);
      const profile = doc.data as NowalaUserProfile;
      // If the profile hasn't been generated yet, set to false
      profile ? setOnboarded(profile.onboarded) : setOnboarded(false);
      setUid(uid);
      setEmail(email);
    } catch (error) {
      console.error(error);
    }
  };

  // Event handler for use auth changes
  const handleAuthChange = async (user: User | null) => {
    user ? setUser(user.uid, user.email) : setUid(null);
  };

  return (
    <Navigator initialRouteName="Home" detachInactiveScreens={false}>
      {uid ? (
        onboarded ? (
          <>
            <Screen name="Home" options={{ headerShown: false }}>
              {props => (
                <BottomNavigator {...props} userId={uid} email={email} />
              )}
            </Screen>
            {/* <Screen name="Drawer" options={{ headerShown: true }}>
              {props => <DrawerNavigator {...props} />}
            </Screen> */}
            <Screen
              name="ProjectDetails"
              options={() => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: true,
                headerTintColor: WHITE,
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
            <Screen
              name="ImpactDetail"
              options={() => ({
                headerTitle: '',
                headerShown: true,
                headerTintColor: WHITE,
              })}
              component={ImpactDetailScreen}></Screen>
            <Screen
              name="BankPayment"
              options={() => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: true,
                headerTintColor: WHITE,
              })}
              component={BankPayment}></Screen>
          </>
        ) : (
          <>
            <Screen
              name="NewUserNav"
              options={{ headerShown: false, title: 'Home' }}>
              {props => (
                <NewUserBottomNavigator {...props} userId={uid} email={email} />
              )}
            </Screen>
            <Screen
              name="ProjectDetails"
              options={() => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: true,
                headerTintColor: WHITE,
              })}
              component={ProjectDetailsScreen}></Screen>
            <Screen
              name="BankPayment"
              options={() => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: true,
                headerTintColor: WHITE,
              })}
              component={BankPayment}></Screen>
          </>
        )
      ) : (
        <>
          <Screen name="Projects">
            {props => <ProjectsScreen {...props} userId={uid} email={email} />}
          </Screen>
          <Screen
            name="ProjectDetails"
            options={() => ({
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: WHITE,
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
