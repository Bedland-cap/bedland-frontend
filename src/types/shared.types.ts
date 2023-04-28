export type Getters<T extends string, K> = {
  [k in T]: K;
};

export type Building = {
  id: string;
  name: string;
  address: string;
  managerId: string;
  floors: string;
  createDate: string;
  updateDate: string;
  version: number;
};

export type Flat = {
  flatNumber: string;
  floor: number;
  owner: string;
  residents: string[];
  monthlyPayments: string;
  lastMaintenance: string;
};

export type BuildingData = {
  buildingName: string;
  flatNumber: string;
  flatFloor: number;
  flatId: string;
  'ownerName+lastname': string;
  ownerPhone: number;
  ownerId: string;
};

export type ResidentsFlats = {
  flatId: string;
  flatNumber: string;
  flatAddress: string;
  flatCreateDate: string;
};

export type BuildingWithCity = Building & { city: string };

export type ResidentsFlatsWithCity = ResidentsFlats & { city: string };
