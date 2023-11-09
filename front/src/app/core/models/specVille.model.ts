export interface SubPrefecture {
  id: number;
  nomSousPrecture: string;
  population: string;
  ville_id: number;
}

export interface City {
  id: number;
  nomVille: string;
  population: string;
  region_id: number;
}

export interface Region {
  id: number;
  nomRegion: string;
  population: string;
}

export interface SpecVille {
  region: Region;
  cities: City[];
  subPrefectures: SubPrefecture[];
}
