import { View, Text } from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  AuthStackParamList,
  AuthStackScreenProps,
  DrawerParamList,
} from './types';
import YourOrdersScreen from '../screens/YourOrders';
import colors from '../theme/colors';

interface DrawerProps extends AuthStackScreenProps<'Drawer'> {
  email: string;
  userId: string;
}

const DrawerNavigator: React.FC<DrawerProps> = () => {
  const { BACKGROUND } = colors;
  const Drawer = createDrawerNavigator<DrawerParamList>();
  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} /> */}
      <Drawer.Screen
        name="YourOrders"
        options={{
          headerTitle: '',
          headerStyle: { backgroundColor: BACKGROUND },
        }}>
        {props => <YourOrdersScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
