import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  NoAuthStack: NavigatorScreenParams<NoAuthStackParamList>;
  ProjectDetails: {
    project: Project;
  };
};

export type AuthStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  YourOrders: { orders: OrderData[] };
  ImpactDetail: {
    impactDetail: ImpactDetail;
    userId: string;
    email: string;
    firstName: string;
  };
  BankPayment: {
    redirectPage: keyof MainTabParamList;
    paymentRef: string;
    price: number;
  };
};

export type MainTabParamList = {
  Wallet: undefined;
  Impact: undefined;
  WaitList: undefined; // todo: remove
  Projects: undefined;
  Account: undefined; // todo: remove
  BankTransfer: undefined; // todo: relocate
};

export type NoAuthStackParamList = {
  // Projects: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
