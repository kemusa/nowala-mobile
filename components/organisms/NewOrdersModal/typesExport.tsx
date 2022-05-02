import { Timestamp } from 'firebase/firestore';

export interface NewOrder {
  uid: string;
  units: number;
  unitPrice: number;
  total: number;
  currency: '£';
  projectId: string;
  email: string;
  orderRef: string;
  timestamp: Timestamp;
  firstName: string;
  waitlist: boolean;
  // orderRef: string;
}
