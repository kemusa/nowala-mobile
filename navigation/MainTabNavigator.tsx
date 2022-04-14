import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';
import { AuthStackScreenProps, MainTabParamList } from './types';
import colors from '../theme/colors';
import AccountPendingScreen from '../screens/AccountPending';

const Tab = createBottomTabNavigator<MainTabParamList>();
const { TRETIARY } = colors;

interface MainTabProps extends AuthStackScreenProps<'Main'> {
  email: string;
  userId: string;
  onboarded: boolean;
}

const MainTabNavigator: React.FC<MainTabProps> = ({
  email,
  userId,
  onboarded,
}) => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={({ navigation }) => ({
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
            <DashboardScreen {...props} email={email} userId={userId} />
          )}
        </Screen>
      ) : (
        <Screen
          name="Account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}>
          {props => <AccountPendingScreen {...props} />}
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
        {props => <ProjectsScreen {...props} email={email} userId={userId} />}
      </Screen>
    </Navigator>
  );
};

export default MainTabNavigator;
