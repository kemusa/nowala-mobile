import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Projects: undefined;
  ProjectDetails: { project: Project; ref: 'Projects' | 'Dashboard' };
  SignUp: undefined;
  Login: undefined;
  PasswordReset: undefined;
  Dashboard: undefined;
  YourOrders: { orders: OrderData[] };
  Home: undefined;
  ImpactDetail: { impactDetail: ImpactDetail };
};

interface NowalaRoutes {
  readonly PROJECTS: keyof StackParamList;
  readonly PROJECT_DETAILS: keyof StackParamList;
  readonly LOGIN: keyof StackParamList;
  readonly SIGN_UP: keyof StackParamList;
  readonly PASSWORD_RESET: keyof StackParamList;
  readonly DASHBOARD: keyof StackParamList;
  readonly HOME: keyof StackParamList;
  readonly IMPACT_DETAIL: keyof StackParamList;
}

const routes: NowalaRoutes = {
  PROJECTS: 'Projects',
  PROJECT_DETAILS: 'ProjectDetails',
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
  PASSWORD_RESET: 'PasswordReset',
  DASHBOARD: 'Dashboard',
  HOME: 'Home',
  IMPACT_DETAIL: 'ImpactDetail',
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

export type {
  StackParamList,
  ProjectsScreenProps,
  ProjectDetailsScreenProps,
  SignUpScreenProps,
  LoginScreenProps,
  DashboardScreenProps,
  YourOrdersScreenProps,
  HomeScreenProps,
  ImpactDetailScreenProps,
};

export { routes };
