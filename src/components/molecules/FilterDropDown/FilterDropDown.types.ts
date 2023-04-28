import { Flat, BuildingData } from 'types/shared.types';

const flatsFilterCheckboxesNames = ['1 - 5', '6 - 10', '11 - 15', '16 - 20'] as const;
export const filterTypes = ['flats', 'residents'] as const;

export type FilterDropDownDataType = (Flat | BuildingData)[];

export type FilterTypes = (typeof filterTypes)[number];

type FlatsFilterName = (typeof flatsFilterCheckboxesNames)[number];

export type FilteringVariants = { [key in FilterTypes]: key };

export type FlatsFilterCheckboxes = {
  name: FlatsFilterName;
  ifChecked: boolean;
  from: number;
  to: number;
}[];

export type BuildingsFilterCheckboxes = { [name: string]: boolean };

export type FilterCheckboxes = {
  flats: FlatsFilterCheckboxes;
  residents: BuildingsFilterCheckboxes;
};

export type FilterDropDownProps = {
  filterType: FilterTypes;
  data: FilterDropDownDataType;
  getFilteredData: (filteredData: FilterDropDownDataType) => void;
};

export const IsBuildingsFilteringGuard = (data: FilterDropDownDataType): data is BuildingData[] =>
  !!(data as BuildingData[])[0].buildingName === true;

export const IsFlatsFilteringGuard = (data: FilterDropDownDataType): data is Flat[] =>
  'buildingName' in data === false;

export type handleOnSubmitProps = {
  sliderThumbFirst: number;
  sliderThumbSecond: number;
};

export type ConditionalFuncProps = {
  data: FilterDropDownDataType;
  filterType: FilterTypes;
};
