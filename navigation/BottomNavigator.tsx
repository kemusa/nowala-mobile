import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={DashboardScreen} />
      <Screen name="Projects" component={ProjectsScreen} />
    </Navigator>
  );
};

export default BottomNavigator;
