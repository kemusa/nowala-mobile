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
}
