type FBtime = { seconds: number; nanoseconds: number };

interface SponsorStatus {
  registered: boolean;
  paid: boolean;
  transferred: boolean;
  installed: boolean;
  collectionStarted: boolean;
}

interface PaidData {
  currency: '£';
  unitCost: number;
}

interface OrderData {
  date: string;
  units: number;
  investment: string;
  currency: string;
  paid: PaidData;
  assetTitle: string;
}
