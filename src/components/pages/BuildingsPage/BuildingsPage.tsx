import { useState } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as BuildingsList } from 'components/organisms/DisplayList/DisplayList';
import Page from 'components/templates/Page/Page';
import mockBuildingsList from 'utils/mock/mockBuildingsList';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import SortButton from 'components/molecules/SortButton/SortButton';
import { sortType } from 'components/molecules/SortButton/SortButton.types';
import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';
import { sortList } from 'components/molecules/SortButton/SortButton.utils';
import * as Styled from './BuildingsPage.styled';
import useDebounce from './BuildingsPage.utils';

const BuildingsPage = () => {
  const [displayList, setDisplayList] = useState<DisplayListType>(
    sortList(mockBuildingsList, 'name'),
  );
  const debouncedSearch = useDebounce(displayList);

  const changeSortOption = (sortOption: sortType): void => {
    setDisplayList([...sortList(displayList, sortOption)] as DisplayListType);
  };

  const searchChange = (sortChangeList: DisplayListType) => {
    setDisplayList(sortChangeList);
  };

  return (
    <Page title='Buildings'>
      <Styled.BuildingsPageContent>
        <Styled.SortSearchContainer>
          <SortButton text='Sort Buildings' changeSortOption={changeSortOption} />
          <SearchBar placeholder='Search buildings...' setList={searchChange} />
        </Styled.SortSearchContainer>
        <BuildingsList displayList={debouncedSearch} />
      </Styled.BuildingsPageContent>
    </Page>
  );
};
export default BuildingsPage;
