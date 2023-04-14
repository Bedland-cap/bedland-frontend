// eslint-disable-next-line import/no-named-default
import { default as BuildingsList } from 'components/organisms/DisplayList/DisplayList';
import Page from 'components/templates/Page/Page';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import SortButton from 'components/molecules/SortButton/SortButton';
import * as Styled from './BuildingsPage.styled';

const sortOptions = ['name', 'city', 'date added'];

const BuildingsPage = () => (
  <Page title='Buildings'>
    <Styled.BuildingsPageContent>
      <Styled.SortSearchContainer>
        <SortButton text='Sort Buildings' sortOptions={sortOptions} />
        <SearchBar placeholder='Search buildings...' />
      </Styled.SortSearchContainer>
      <BuildingsList />
    </Styled.BuildingsPageContent>
  </Page>
);

export default BuildingsPage;
