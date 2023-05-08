import { useState } from 'react';
import Page from 'components/templates/Page/Page';
// eslint-disable-next-line import/no-named-default
import { default as FlatsList } from 'components/organisms/DisplayList/DisplayList';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import mockResidentFlats from 'utils/mock/mockResidentsFlats';
import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';
import useDebounce from '../BuildingsPage/BuildingsPage.utils';
import * as Styled from './FlatsPage.styled';

const FlatsPage = () => {
  const [displayList, setDisplayList] = useState<DisplayListType>(mockResidentFlats);
  const debouncedSearch = useDebounce(displayList);

  const searchChange = (sortChangeList: DisplayListType) => {
    setDisplayList(sortChangeList);
  };

  return (
    <Page title='Flats'>
      <Styled.FlatsPageContent>
        <Styled.SearchInputContainer>
          <SearchBar placeholder='Search flats...' setList={searchChange} />
        </Styled.SearchInputContainer>
        <FlatsList displayList={debouncedSearch} />
      </Styled.FlatsPageContent>
    </Page>
  );
};

export default FlatsPage;
