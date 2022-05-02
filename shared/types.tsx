interface NowalaUserProfile {
  firstName: string;
  lastName: string;
  onboarded: boolean;
  hasOrdered: boolean;
}

interface NowalaUserData {
  userId: string;
  email: string;
  firstName: string;
  onboarded: boolean;
  hasOrdered: boolean;
  updateHasOrdered: () => void; // todo: remove and fix issues with firestore listener
}
