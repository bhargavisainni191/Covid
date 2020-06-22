export class CountryDataModel {
  FR: string;
  PR: string;
  activeCases: number;
  country: string;
  countryCode: string;
  dailyConfirmed: number;
  dailyDeaths: number;
  lastUpdated: string;
  lat: number;
  lng: number;
  totalConfirmed: number;
  totalConfirmedPerMillionPopulation: number;
  totalCritical: number;
  totalDeaths: number;
  totalDeathsPerMillionPopulation: number;
  totalRecovered: number;
}

export class StateModel {
  position: string;
  statename: string;
  confirmed?: string;
  recovered: string;
  death: string;
  total: string;
}
