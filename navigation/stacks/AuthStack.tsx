import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList, RootStackScreenProps } from '../types';
import MainTabNavigator from '../MainTabNavigator';
import colors from '../../theme/colors';
import YourOrdersScreen from '../../screens/YourOrders';
import ImpactDetailScreen from '../../screens/ImpactDetail';
import BankPaymentScreen from '../../screens/BankPayment';

const Stack = createStackNavigator<AuthStackParamList>();
const { WHITE, BACKGROUND } = colors;

interface AuthStackProps extends RootStackScreenProps<'AuthStack'> {
  user: NowalaUserData;
}

const AuthStack: React.FC<AuthStackProps> = ({ user }) => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Main">
      <Screen name="Main" options={{ headerShown: false, title: '' }}>
        {props => <MainTabNavigator {...props} user={user} />}
      </Screen>
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
        component={BankPaymentScreen}></Screen>
    </Navigator>
  );
};

export default AuthStack;
