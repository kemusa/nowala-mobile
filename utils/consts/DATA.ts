import { Timestamp } from 'firebase/firestore';
import { SponsorshipData } from '../../screens/Wallet/typesModule';

const statusText = {
  registered: 'Sign up for first project 😀',
  paid: 'Money received',
  transferred: 'Money arrived Sierra Leone',
  installed: 'Solar Panel Kit installation complete',
  collectionStarted: 'Payments started',
};

// const statusText: StatusText = {
//   registered: 'Sign up for first project 😀',
//   paid: 'Money received',
//   transferred: 'Money arrived Sierra Leone',
//   installed: 'Solar Panel Kit installation complete',
//   collectionStarted: 'Payments started',
// };

const statusInit: SponsorStatus = {
  registered: false,
  paid: false,
  transferred: false,
  installed: false,
  collectionStarted: false,
};

const timestamp = Date.parse('12/31/2021');

const projectsInit: SponsorshipData = {
  asset: 'solar panel kits',
  unitCost: 0,
  units: 0,
  interest: 0.1,
  collected: 0,
  currency: 'SLL',
  projectId: 'solar_panel_kits_ignite_power_sl',
  status: statusInit,
  orderDate: Timestamp.fromDate(new Date(timestamp)),
  paid: { currency: '£', unitCost: 61 },
};

// const financialSummary: FinancialSummary = {
//   currency: '£',
//   totalCollected: 0,
//   totalInvested: 0,
// };

const productMap = {
  solar_kits_ignite_power_sl: {
    title: 'Solar panel kits',
    iconUri: 'https://storage.googleapis.com/nowala-public/spk_icon.png',
  },
};

const financialSummary = {
  currency: '£',
  totalCollected: 0,
  totalInvested: 0,
};

export { financialSummary, projectsInit, statusText, statusInit, productMap };
