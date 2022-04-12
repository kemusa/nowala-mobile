import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';
import { MainTabParamList, RootStackScreenProps } from './types';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();
const { TRETIARY } = colors;

interface MainTabProps extends RootStackScreenProps<'Main'> {
  email: string;
  userId: string;
}

const MainTabNavigator: React.FC<MainTabProps> = ({ email, userId }) => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: TRETIARY,
        tabBarInactiveTintColor: '#ABABAB',
      }}>
      <Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}>
        {props => <DashboardScreen {...props} email={email} userId={userId} />}
      </Screen>
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
