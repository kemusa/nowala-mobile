import { Timestamp } from 'firebase/firestore';

export interface NewOrder {
  uid: string;
  units: number;
  projectId: string;
  email: string;
  timestamp: Timestamp;
}
