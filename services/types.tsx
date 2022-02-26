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

// | AuthTokens
// | { signOut: boolean }
// | { complete: boolean }
// | null;

// export interface KeychainComplete {
//   complete: boolean;
// }

// export interface KeychainSignOut {
//   signOut: boolean;
// }
interface KeychainAuthTokens {
  moonsiftToken: string;
  customToken: string;
}

interface KeychainState {
  complete?: boolean;
  signedOut?: boolean;
  moonsiftToken?: string;
  customToken?: string;
  shareAuthPending?: boolean;
}

export type {
  Services,
  FBCollectionOrder,
  FBCollectionFilter,
  FBCollectionConfig,
  KeychainAuthTokens,
  KeychainState,
  SnapshotData,
};