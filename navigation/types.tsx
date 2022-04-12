import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Projects: undefined;
  ProjectDetails: {
    project: Project;
  };
  SignUp: undefined;
  Login: undefined;
  PasswordReset: undefined;
  YourOrders: { orders: OrderData[] };
  BottomNav: undefined;
  Drawer: undefined;
  ImpactDetail: { impactDetail: ImpactDetail; userId?: string; email?: string };
  Intro: undefined;
  BankPayment: {
    redirectPage: keyof RootStackParamList;
    paymentRef: string;
    price: number;
  };
};

export type MainTabParamList = {
  Dashboard: undefined;
  Account: undefined;
  Projects: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
