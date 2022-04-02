import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AccountPending from '../screens/AccountPending';
import ProjectsScreen from '../screens/Projects';
import { HomeScreenProps, NewUserNavScreenProps } from './RootNavigatorTypes';
import { StackParamList } from './RootNavigatorTypes';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator<StackParamList>();
const { TRETIARY } = colors;

const NewUserNavigator: React.FC<NewUserNavScreenProps> = ({
  userId,
  email,
}) => {
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
