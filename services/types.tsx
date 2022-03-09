import { DocumentData, WhereFilterOp } from 'firebase/firestore';
import AuthService from '../services/auth';
import DbService from '../services/db';
import AnalyticsService from './analytics';
// import BackendService from './backend';

interface Services {
  analytics: AnalyticsService;
  auth: AuthService;
  db: DbService;
}

interface FBCollectionOrder {
  direction: 'asc' | 'desc';
  field: string;
}

interface FBCollectionFilter {
  field: string;
  value: string;
  op: WhereFilterOp;
}

interface FBCollectionConfig {
  order?: FBCollectionOrder;
  filter?: FBCollectionFilter;
}

interface SnapshotData {
  id: string;
  data: DocumentData;
}

interface UserProfile {
  displayName: string;
  onboarded: boolean;
}

export type {
  Services,
  FBCollectionOrder,
  FBCollectionFilter,
  FBCollectionConfig,
  SnapshotData,
  UserProfile,
};
