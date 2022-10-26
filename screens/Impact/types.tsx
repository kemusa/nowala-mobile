interface ImpactSummary {
  peopleImpacted: number;
  peopleImpactedTogether: number;
}

interface PeopleList {
  numPeople: number;
  title: string;
  townCity: string;
  country: string;
  beneficiaryOccupation: string;
  iconUrl: string;
}

interface ImpactContext {
  peopleImpacted: number;
  peopleImpactedTogether: number;
  peopleList: PeopleList[];
  accountFunded: boolean;
  waitlistNum: number;
  menuModalOpen: boolean;
  topUpModalOpen: boolean;
  user: NowalaUserProfile;
  goToTotalImpact: () => void;
  goToImpactTogether: () => void;
  goToProjectDetails: () => void;
  openMenuModal: () => void;
  closeMenuModal: () => void;
  openTopUpModal: () => void;
  closeTopUpModal: () => void;
  signOut: () => void;
  goToUserAccount: () => void;
  goToPeopleDetail: () => void;
  goToAllPeopleHelped: () => void;
  handleOrder: (price: number, paymentRef: string) => void;
}
