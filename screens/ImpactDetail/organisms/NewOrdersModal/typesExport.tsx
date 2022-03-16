import { Timestamp } from 'firebase/firestore';

export interface NewOrder {
  uid: string;
  units: number;
  projectId: string;
  alias: string;
  email: string;
  timestamp: Timestamp;
}
