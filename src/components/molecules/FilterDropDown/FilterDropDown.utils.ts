import { BuildingData } from 'types/shared.types';
import { FieldValues, UseFormResetField } from 'react-hook-form';
import { FilterCheckboxes, FilteringVariants } from './FilterDropDown.types';

export const filteringVariants: FilteringVariants = {
  flats: 'flats',
  residents: 'residents',
};

export const FILTER_CHECKBOXES: FilterCheckboxes = {
  flats: [
    { name: '1 - 5', ifChecked: false, from: 1, to: 5 },
    { name: '6 - 10', ifChecked: false, from: 6, to: 10 },
    { name: '11 - 15', ifChecked: false, from: 11, to: 15 },
    { name: '16 - 20', ifChecked: false, from: 16, to: 20 },
  ],
  residents: {},
};

export const setBuildingCheckboxes = (data: BuildingData[]) => {
  const buildingNames: string[] = [];
  data.map((resident) =>
    buildingNames.find((name) => name === resident.buildingName) === undefined
      ? Object.assign(FILTER_CHECKBOXES.residents, {
          [`${resident.buildingName}`]: false,
        })
      : 'null',
  );
};
export const setMockBuildingCheckboxes = (data: BuildingData[], list: FilterCheckboxes) => {
  const buildingNames: string[] = [];
  data.map((resident) =>
    buildingNames.find((name) => name === resident.buildingName) === undefined
      ? Object.assign(list.residents, {
          [`${resident.buildingName}`]: false,
        })
      : 'null',
  );
};

export const FilterDropDownConditionals = {
  ifAnyResidentCheckboxChecked: () =>
    Object.keys(FILTER_CHECKBOXES.residents).find(
      (resident) => FILTER_CHECKBOXES.residents[resident] === true,
    ),
  ifAnyFlatCheckboxChecked: () => FILTER_CHECKBOXES.flats.find((flat) => flat.ifChecked === true),
};

export const resetCheckboxes = (
  list: FilterCheckboxes,
  resetField: UseFormResetField<FieldValues>,
) =>
  [...Object.keys(list.residents), ...list.flats.map((flat) => flat.name), 'SelectAll'].forEach(
    (name) => resetField(name),
  );
