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
  const [onboarded, setOnboarded] = useState(true);
  const [user, setUser] = useState({} as NowalaUserProfile);

  // Initialize event handler for user auth changes
  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthChange(handleAuthChange);
      return unsubscribe;
    } catch (error) {
      console.error(error);
    }
  }, []);

  // // Listener for dashboard data
  // useEffect(() => {
  //   const unsubscribe = db.subscribeToDoc(
  //     `users/${user.userId}`,
  //     handleUserData,
  //   );
  //   unsubscribe();
  // }, []);

  // const handleUserData = (data: any) => {
  //   console.log('DATA', data);
  // };

  // Initialize event handler for user auth changes
  useEffect(() => {
    try {
      if (uid) analytics.identify(uid);
    } catch (error) {
      console.error(error);
    }
  }, [uid]);

  const setUserData = async (uid: string, email: string | null) => {
    try {
      const doc = await db.findById(`users/${uid}`);
      const profile = doc.data as NowalaUserData;
      // If the profile hasn't been generated yet, set to false
      profile ? setOnboarded(onboarded) : setOnboarded(false);
      const userProfile: NowalaUserProfile = {
        userId: uid,
        email: email || '',
        firstName: profile.firstName,
        onboarded: profile.onboarded,
        country: profile.country,
        moneySummary: profile.moneySummary,
        impactSummary: profile.impactSummary,
      };
      setUid(uid);
      setUser({
        ...userProfile,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const updateHasOrdered = () => {
  //   setUser({
  //     ...user,
  //     userId: user.userId,
  //     email: user.email,
  //     firstName: user.firstName,
  //     onboarded: user.onboarded,
  //     hasOrdered: true,
  //   });
  // };

  // Event handler for use auth changes
  const handleAuthChange = async (user: User | null) => {
    user ? setUserData(user.uid, user.email) : setUid(null);
  };

  return (
    <Navigator
      initialRouteName="AuthStack"
      detachInactiveScreens={false}
      screenOptions={{}}>
      {uid ? (
        <>
          <Screen name="AuthStack" options={{ headerShown: false, title: '' }}>
            {props => <AuthStack {...props} user={user}></AuthStack>}
          </Screen>
          <Screen
            name="ProjectDetails"
            options={{
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: WHITE,
            }}>
            {props => <ProjectDetailsScreen {...props} user={user} />}
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
            options={{
              headerTitle: '',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: WHITE,
              // headerLeft: () => <Text>Back</Text>,
            }}>
            {props => <ProjectDetailsScreen {...props} user={user} />}
          </Screen>
        </>
      )}
    </Navigator>
  );
};

export default RootNavigator;
