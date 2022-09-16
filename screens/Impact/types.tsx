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
  goToTotalImpact: () => void;
  goToImpactTogether: () => void;
  goToProjectDetails: () => void;
  openMenuModal: () => void;
  closeMenuModal: () => void;
  signOut: () => void;
  goToUserAccount: () => void;
  goToPeopleDetail: () => void;
  goToAllPeopleHelped: () => void;
}
