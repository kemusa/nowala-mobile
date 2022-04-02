import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Projects: undefined;
  ProjectDetails: {
    project: Project;
    ref: 'Projects' | 'Dashboard';
    userId?: string;
    email?: string;
  };
  SignUp: undefined;
  Login: undefined;
  PasswordReset: undefined;
  Dashboard: undefined;
  YourOrders: { orders: OrderData[] };
  Home: undefined;
  NewUserNav: undefined;
  Drawer: undefined;
  ImpactDetail: { impactDetail: ImpactDetail; userId?: string; email?: string };
  Account: undefined;
  Intro: undefined;
  BankPayment: { redirectPage: keyof StackParamList };
};

interface NowalaRoutes {
  readonly PROJECTS: keyof StackParamList;
  readonly PROJECT_DETAILS: keyof StackParamList;
  readonly LOGIN: keyof StackParamList;
  readonly SIGN_UP: keyof StackParamList;
  readonly PASSWORD_RESET: keyof StackParamList;
  readonly DASHBOARD: keyof StackParamList;
  readonly HOME: keyof StackParamList;
  readonly NEW_USER_NAV: keyof StackParamList;
  readonly DRAWER: keyof StackParamList;
  readonly IMPACT_DETAIL: keyof StackParamList;
  readonly ACCOUNT_PENDING: keyof StackParamList;
  readonly INTRO: keyof StackParamList;
  readonly BANK_PAYMENT: keyof StackParamList;
}

const routes: NowalaRoutes = {
  PROJECTS: 'Projects',
  PROJECT_DETAILS: 'ProjectDetails',
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
  PASSWORD_RESET: 'PasswordReset',
  DASHBOARD: 'Dashboard',
  HOME: 'Home',
  DRAWER: 'Drawer',
  IMPACT_DETAIL: 'ImpactDetail',
  ACCOUNT_PENDING: 'Account',
  INTRO: 'Intro',
  BANK_PAYMENT: 'BankPayment',
  NEW_USER_NAV: 'NewUserNav',
};

// Projects Types
type ProjectsRouteProps = RouteProp<StackParamList, 'Projects'>;
type ProjectsScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'Projects'
>;
type ProjectsScreenProps = {
  route: ProjectsRouteProps;
  navigation: ProjectsScreenNavigationProps;
  userId: string;
  email: string;
};

// Intro Types
type IntroRouteProps = RouteProp<StackParamList, 'Intro'>;
type IntroScreenNavigationProps = StackNavigationProp<StackParamList, 'Intro'>;
type IntroScreenProps = {
  route: IntroRouteProps;
  navigation: IntroScreenNavigationProps;
};

// Project Details Types
type ProjectDetailsRouteProps = RouteProp<StackParamList, 'ProjectDetails'>;
type ProjectDetailsScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'ProjectDetails'
>;
type ProjectDetailsScreenProps = {
  route: ProjectDetailsRouteProps;
  navigation: ProjectDetailsScreenNavigationProps;
};

// Login Types
type SignUpRouteProps = RouteProp<StackParamList, 'SignUp'>;
type SignUpScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'SignUp'
>;
type SignUpScreenProps = {
  route: SignUpRouteProps;
  navigation: SignUpScreenNavigationProps;
};

// Login Types
type LoginRouteProps = RouteProp<StackParamList, 'Login'>;
type LoginScreenNavigationProps = StackNavigationProp<StackParamList, 'Login'>;
type LoginScreenProps = {
  route: LoginRouteProps;
  navigation: LoginScreenNavigationProps;
};

// Dashboard Types
type DashboardRouteProps = RouteProp<StackParamList, 'Dashboard'>;
type DashboardScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'Dashboard'
>;
type DashboardScreenProps = {
  route: DashboardRouteProps;
  navigation: DashboardScreenNavigationProps;
  userId: string;
  email: string;
};

// Order Types
type YourOrdersRouteProps = RouteProp<StackParamList, 'YourOrders'>;
type YourOrdersScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'YourOrders'
>;
type YourOrdersScreenProps = {
  route: YourOrdersRouteProps;
  navigation: YourOrdersScreenNavigationProps;
};

// Home Types
type HomeRouteProps = RouteProp<StackParamList, 'Home'>;
type HomeScreenNavigationProps = StackNavigationProp<StackParamList, 'Home'>;
type HomeScreenProps = {
  route: HomeRouteProps;
  navigation: HomeScreenNavigationProps;
  userId: string;
  email: string;
};

// New User Navigator Types
type NewUserNavRouteProps = RouteProp<StackParamList, 'NewUserNav'>;
type NewUserNavScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'NewUserNav'
>;
type NewUserNavScreenProps = {
  route: NewUserNavRouteProps;
  navigation: NewUserNavScreenNavigationProps;
  userId: string;
  email: string;
};

// Drawer Types
type DrawerRouteProps = RouteProp<StackParamList, 'Drawer'>;
type DrawerScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'Drawer'
>;
type DrawerScreenProps = {
  route: DrawerRouteProps;
  navigation: DrawerScreenNavigationProps;
};

// Impact Detail Types
type ImpactDetailRouteProps = RouteProp<StackParamList, 'ImpactDetail'>;
type ImpactDetailScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'ImpactDetail'
>;
type ImpactDetailScreenProps = {
  route: ImpactDetailRouteProps;
  navigation: ImpactDetailScreenNavigationProps;
};

// Account Pending Types
type AccountPendingRouteProps = RouteProp<StackParamList, 'Account'>;
type AccountPendingScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'Account'
>;
type AccountPendingScreenProps = {
  route: AccountPendingRouteProps;
  navigation: AccountPendingScreenNavigationProps;
};

// Bank Payment Types
type BankPaymentRouteProps = RouteProp<StackParamList, 'BankPayment'>;
type BankPaymentScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'BankPayment'
>;
type BankPaymentScreenProps = {
  route: BankPaymentRouteProps;
  navigation: BankPaymentScreenNavigationProps;
};

export type {
  StackParamList,
  ProjectsScreenProps,
  ProjectDetailsScreenProps,
  SignUpScreenProps,
  LoginScreenProps,
  DashboardScreenProps,
  YourOrdersScreenProps,
  HomeScreenProps,
  NewUserNavScreenProps,
  ImpactDetailScreenProps,
  AccountPendingScreenProps,
  IntroScreenProps,
  DrawerScreenProps,
  BankPaymentScreenProps,
};

export { routes };
