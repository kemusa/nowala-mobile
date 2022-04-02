// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StackParamList } from './types';
// import AccountPendingScreen from '../screens/AccountPending';
// import ProjectsScreen from '../screens/Projects';
// import { enableScreens } from 'react-native-screens';

// enableScreens(false);

// const Stack = createStackNavigator<StackParamList>();

// const NotVerifiedScreens = () => {
//   const { Navigator, Screen } = Stack;
//   return (
//     <Navigator detachInactiveScreens={false}>
//       <Screen
//         name="Account"
//         options={() => ({
//           headerTitle: '',
//           headerShown: true,
//           headerStyle: { backgroundColor: '#fff' },
//         })}
//         component={AccountPendingScreen}></Screen>
//       <Screen
//         name="Projects"
//         component={ProjectsScreen}
//         options={{ headerShown: false }}></Screen>
//     </Navigator>
//   );
// };

// export default NotVerifiedScreens;
