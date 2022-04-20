import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { enableScreens } from 'react-native-screens';
import ServicesContext, { Services } from '../services';
import { User } from '@firebase/auth';
import colors from '../theme/colors';
import NoAuthStack from './stacks/NoAuthStack';
import AuthStack from './stacks/AuthStack';
import ProjectDetailsScreen from '../screens/ProjectDetails';

enableScreens(false);

const { WHITE } = colors;

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { auth, analytics, db } = useContext(ServicesContext) as Services;
  const [uid, setUid] = useState(null as any);
  const [email, setEmail] = useState(null as any);
  const [firstName, setFirstName] = useState(null as any);
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
      setFirstName(profile.firstName);
    } catch (error) {
      console.error(error);
    }
  };

  // Event handler for use auth changes
  const handleAuthChange = async (user: User | null) => {
    user ? setUser(user.uid, user.email) : setUid(null);
  };

  return (
    <Navigator initialRouteName="AuthStack" detachInactiveScreens={false}>
      {uid ? (
        <>
          <Screen name="AuthStack" options={{ headerShown: false, title: '' }}>
            {props => (
              <AuthStack
                {...props}
                userId={uid}
                email={email}
                firstName={firstName}
                onboarded={onboarded}></AuthStack>
            )}
          </Screen>
          <Screen
            name="ProjectDetails"
            options={{
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: WHITE,
            }}>
            {props => (
              <ProjectDetailsScreen
                {...props}
                userId={uid}
                email={email}
                firstName={firstName}
              />
            )}
          </Screen>
        </>
      ) : (
        <>
          <Screen
            options={() => ({
              headerShown: false,
              title: '',
            })}
            name="NoAuthStack"
            component={NoAuthStack}></Screen>
          <Screen
            name="ProjectDetails"
            component={ProjectDetailsScreen}
            options={{
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: WHITE,
              // headerLeft: () => <Text>Back</Text>,
            }}></Screen>
        </>
      )}
    </Navigator>
  );
};

export default RootNavigator;
