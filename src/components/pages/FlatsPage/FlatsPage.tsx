import { useState } from 'react';
import Page from 'components/templates/Page/Page';
// eslint-disable-next-line import/no-named-default
import { default as FlatsList } from 'components/organisms/DisplayList/DisplayList';
import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import mockResidentFlats from 'utils/mock/mockResidentsFlats';
import SortButton from 'components/molecules/SortButton/SortButton';
import { sortType } from 'components/molecules/SortButton/SortButton.types';
import { sortList } from 'components/molecules/SortButton/SortButton.utils';
import * as Styled from './FlatsPage.styled';

const FlatsPage = () => {
  const [displayList, setDisplayList] = useState<DisplayListType>(
    sortList(mockResidentFlats, 'name'),
  );

  const changeSortOption = (sortOption: sortType): void => {
    setDisplayList([...sortList(displayList, sortOption)] as DisplayListType);
  };

  return (
    <Page title='Flats'>
      <Styled.FlatsPageContent>
        <Styled.SortSearchContainer>
          <SortButton text='Sort Flats' changeSortOption={changeSortOption} />
          <SearchBar placeholder='Search flats...' />
        </Styled.SortSearchContainer>
        <FlatsList displayList={displayList} />
      </Styled.FlatsPageContent>
    </Page>
  );
};

export default FlatsPage;
