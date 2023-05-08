import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';
import { filterOptions } from './SearchBar.types';
import { IsBuildingGuard } from '../SortButton/SortButton.types';

export const STATIC_VALUES = {
  iconSize: 20,
  containerPaddingLeft: 14,
  contentGap: 9,
};

const displayListFilter = (
  list: DisplayListType,
  searchValueLowerCase: string,
): DisplayListType => {
  if (IsBuildingGuard(list)) {
    return list.filter((item) =>
      filterOptions.some((el) => item[el].toLowerCase().includes(searchValueLowerCase)),
    );
  }
  return list;
};

export const searchFilter = (
  searchValue: string,
  list: DisplayListType,
  setList: (arg: DisplayListType) => void,
) => {
  const searchValueLowerCase = searchValue.toLowerCase();
  const filteredList = searchValue ? displayListFilter(list, searchValueLowerCase) : list;
  setList(filteredList);
  return filteredList;
};
