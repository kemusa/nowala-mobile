import { Timestamp } from 'firebase/firestore';
import { SponsorshipData } from '../../screens/Dashboard/typesImport';

const statusText: StatusText = {
  registered: 'Sign up for first project 😀',
  paid: 'Money received',
  transferred: 'Money arrived Sierra Leone',
  installed: 'Solar Kit installation complete',
  collectionStarted: 'Payments started',
};

const statusInit: SponsorStatus = {
  registered: false,
  paid: false,
  transferred: false,
  installed: false,
  collectionStarted: false,
};

const timestamp = Date.parse('12/31/2021');

const projectsInit: SponsorshipData = {
  asset: 'solar kits',
  unitCost: 0,
  units: 0,
  interest: 0.1,
  collected: 0,
  currency: 'SLL',
  projectId: 'ywpYsNv5F0Gv8YBtVQBX',
  status: statusInit,
  orderDate: Timestamp.fromDate(new Date(timestamp)),
  paid: { currency: '£', unitCost: 61 },
};
export { projectsInit, statusText, statusInit };
