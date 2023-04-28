import {
  FlatsFilterCheckboxes,
  BuildingsFilterCheckboxes,
} from 'components/molecules/FilterDropDown/FilterDropDown.types';

export const mockArrayObjectList: FlatsFilterCheckboxes = [
  { name: '1 - 5', ifChecked: false, from: 1, to: 5 },
  { name: '6 - 10', ifChecked: false, from: 6, to: 10 },
  { name: '11 - 15', ifChecked: false, from: 11, to: 15 },
  { name: '16 - 20', ifChecked: false, from: 16, to: 20 },
];

export const mockArrayStringList: BuildingsFilterCheckboxes = {
  'Miedziana Street 3': true,
  'Desert Street 2X': true,
  'Lakewood Avenue 77': true,
  'Berry Street 27': true,
  'Seaport Avenue 51': true,
};
