import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList, RootStackScreenProps } from '../types';
import MainTabNavigator from '../MainTabNavigator';
import colors from '../../theme/colors';
import YourOrdersScreen from '../../screens/YourOrders';
import BankPaymentScreen from '../../screens/BankPayment';
import ItemDetailScreen from '../../screens/ItemDetail';
import UserAccountScreen from '../../screens/UserAccount';
import AssetDetailScreen from '../../screens/AssetDetail';
import PeopleDetailScreen from '../../screens/PeopleDetail';
import AssetsScreen from '../../screens/AssetsFull';
import PeopleFullScreen from '../../screens/PeopleFull';

const Stack = createStackNavigator<AuthStackParamList>();
const { WHITE, BACKGROUND } = colors;

interface AuthStackProps extends RootStackScreenProps<'AuthStack'> {
  user: NowalaUserProfile;
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
        name="BankPayment"
        options={() => ({
          headerTitle: '',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: WHITE,
        })}
        component={BankPaymentScreen}></Screen>
      <Screen
        name="ItemDetail"
        options={() => ({
          headerTitle: '',
          headerShown: true,
        })}
        component={ItemDetailScreen}></Screen>
      <Screen
        name="AssetDetail"
        options={() => ({
          headerTitle: '',
          headerShown: true,
        })}
        component={AssetDetailScreen}></Screen>
      <Screen
        name="PeopleDetail"
        options={() => ({
          headerTitle: '',
          headerShown: true,
        })}
        component={PeopleDetailScreen}></Screen>
      <Screen name="UserAccount" options={{ title: '' }}>
        {props => <UserAccountScreen {...props} user={user} />}
      </Screen>
      <Screen name="Assets" options={{ title: '' }}>
        {props => <AssetsScreen {...props} user={user} />}
      </Screen>
      <Screen name="PeopleHelped" options={{ title: '' }}>
        {props => <PeopleFullScreen {...props} user={user} />}
      </Screen>
    </Navigator>
  );
};

export default AuthStack;
