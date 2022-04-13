import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  NoAuthStack: NavigatorScreenParams<NoAuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  ProjectDetails: {
    project: Project;
  };
};

export type AuthStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Drawer: NavigatorScreenParams<DrawerParamList>;
  YourOrders: { orders: OrderData[] };
  ImpactDetail: { impactDetail: ImpactDetail; userId?: string; email?: string };
  BankPayment: {
    redirectPage: keyof RootStackParamList | keyof AuthStackParamList;
    paymentRef: string;
    price: number;
  };
};

export type MainTabParamList = {
  Dashboard: undefined;
  Projects: undefined;
  Account: undefined;
};

export type NoAuthStackParamList = {
  Projects: undefined;
  SignUp: undefined;
  Login: undefined;
};

export type DrawerParamList = {
  YourOrders: { orders: OrderData[] };
};

// export type OnboardingStackParamList = {
//   Main: NavigatorScreenParams<OnboardingTabParamList>;
//   YourOrders: { orders: OrderData[] };
//   ImpactDetail: { impactDetail: ImpactDetail; userId?: string; email?: string };
//   BankPayment: {
//     redirectPage: keyof RootStackParamList;
//     paymentRef: string;
//     price: number;
//   };
// };

// export type OnboardingTabParamList = {
//   Projects: undefined;
//   Account: undefined;
// };

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type DrawerStackScreenProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type NoAuthStackScreenProps<T extends keyof NoAuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<NoAuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// export type OnboardingStackScreenProps<T extends keyof OnboardingTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<OnboardingTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
