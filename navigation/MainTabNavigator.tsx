import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';
import { AuthStackScreenProps, MainTabParamList } from './types';
import colors from '../theme/colors';
import AccountPendingScreen from '../screens/AccountPending';
import WaitListScreen from '../screens/WaitList';

const Tab = createBottomTabNavigator<MainTabParamList>();
const { TRETIARY } = colors;

interface MainTabProps extends AuthStackScreenProps<'Main'> {
  user: NowalaUserData;
}

const MainTabNavigator: React.FC<MainTabProps> = ({ user }) => {
  const { onboarded, hasOrdered, email, userId, firstName } = user;
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={() => ({
        headerShown: true,
        tabBarActiveTintColor: TRETIARY,
        tabBarInactiveTintColor: '#ABABAB',
      })}>
      {onboarded ? (
        <Screen
          name="Dashboard"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}>
          {props => (
            <DashboardScreen
              {...props}
              email={email}
              userId={userId}
              firstName={firstName}
            />
          )}
        </Screen>
      ) : hasOrdered && !onboarded ? (
        <Screen
          name="WaitList"
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            title: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass-outline" size={size} color={color} />
            ),
          }}
          component={WaitListScreen}></Screen>
      ) : (
        <Screen
          name="Account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}>
          {props => <AccountPendingScreen {...props} user={user} />}
        </Screen>
      )}
      <Screen
        name="Projects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps" size={size} color={color} />
          ),
        }}>
        {props => <ProjectsScreen {...props} user={user} />}
      </Screen>
    </Navigator>
  );
};

export default MainTabNavigator;
