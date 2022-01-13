import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Projects: undefined;
  ProjectDetails: { project: Project };
  SignUp: undefined;
  Login: undefined;
  PasswordReset: undefined;
  Dashboard: undefined;
};

interface NowalaRoutes {
  readonly Projects: keyof StackParamList;
  readonly ProjectDetails: keyof StackParamList;
  readonly LOGIN: keyof StackParamList;
  readonly SIGN_UP: keyof StackParamList;
  readonly PASSWORD_RESET: keyof StackParamList;
  readonly DASHBOARD: keyof StackParamList;
}

const routes: NowalaRoutes = {
  Projects: 'Projects',
  ProjectDetails: 'ProjectDetails',
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
  PASSWORD_RESET: 'PasswordReset',
  DASHBOARD: 'Dashboard',
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

export type {
  StackParamList,
  ProjectsScreenProps,
  ProjectDetailsScreenProps,
  SignUpScreenProps,
  LoginScreenProps,
  DashboardScreenProps,
};

export { routes };
