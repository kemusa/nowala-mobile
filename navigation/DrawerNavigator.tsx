// import { View, Text } from 'react-native';
// import React from 'react';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
//   DrawerContentComponentProps,
// } from '@react-navigation/drawer';
// import { DrawerScreenProps } from './RootNavigatorTypes';

// const DrawerNavigator: React.FC<DrawerScreenProps> = () => {
//   const Drawer = createDrawerNavigator();
//   const CustomDrawerContent = (props: DrawerContentComponentProps) => {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//       </DrawerContentScrollView>
//     );
//   };

//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}>
//       {/* <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} /> */}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;
