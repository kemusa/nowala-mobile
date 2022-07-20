import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';
import { AuthStackScreenProps, MainTabParamList } from './types';
import colors from '../theme/colors';
import AccountPendingScreen from '../screens/AccountPending';
import WaitListScreen from '../screens/WaitList';
import BankTransferScreen from '../screens/BankTransfer';
import WalletTabIcon from '../components/atoms/icons/WalletTabIcon';
import ImpactScreen from '../screens/Impact';
import ImpactTabIcon from '../components/atoms/icons/ImpactTabIcon';
import ProjectsTabIcon from '../components/atoms/icons/ProjectsTabIcon';

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
      <Screen
        name="Wallet"
        options={{
          tabBarIcon: ({ color, size }) => <WalletTabIcon color={color} />,
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
      <Screen
        name="Impact"
        options={{
          tabBarIcon: ({ color, size }) => <ImpactTabIcon color={color} />,
        }}>
        {props => (
          <ImpactScreen
            {...props}
            email={email}
            userId={userId}
            firstName={firstName}
          />
        )}
      </Screen>
      <Screen
        name="Projects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <ProjectsTabIcon color={color} />,
        }}>
        {props => <ProjectsScreen {...props} user={user} />}
      </Screen>
    </Navigator>
  );
};

export default MainTabNavigator;
