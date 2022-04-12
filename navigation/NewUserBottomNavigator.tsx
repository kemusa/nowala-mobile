import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AccountPending from '../screens/AccountPending';
import ProjectsScreen from '../screens/Projects';
import colors from '../theme/colors';
import { MainTabParamList, RootStackScreenProps } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();
const { TRETIARY } = colors;

interface MainTabProps extends RootStackScreenProps<'Main'> {
  email: string;
  userId: string;
}

const NewUserNavigator: React.FC<MainTabProps> = ({ userId, email }) => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: TRETIARY,
        tabBarInactiveTintColor: '#ABABAB',
      }}>
      <Screen
        name="Account"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}>
        {props => <AccountPending {...props} />}
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

export default NewUserNavigator;
