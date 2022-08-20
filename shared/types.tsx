interface NowalaUserProfile {
  userId: string;
  email: string;
  firstName: string;
  onboarded: boolean;
  country: string;
  moneySummary: WalletSummary;
  impactSummary: { peopleImpacted: number };
}

interface NowalaUserData {
  email: string;
  firstName: string;
  onboarded: boolean;
  country: string;
  moneySummary: WalletSummary;
  impactSummary: { peopleImpacted: number };
}
