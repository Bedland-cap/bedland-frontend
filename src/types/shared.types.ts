export type Getters<T extends string, K> = {
  [k in T]: K;
};

export type Building = {
  id: string;
  name: string;
  address: string;
  managerId: string;
  floors: string;
};

export type Flat = {
  id: string;
  version: number;
  createDate: Date;
  updateDate: Date;
  buildingId: number;
  number: number;
  floor: number;
  shapePath: string;
};

export type FlatWithAddress = Flat & { address: string };
