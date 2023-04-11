import SearchInput from 'components/atoms/SearchInput/SearchInput';
import BuildingsList from 'components/organisms/BuildingsList/BuildingsList';
import Page from 'components/templates/Page/Page';
import SortButton from 'components/molecules/SortButton/SortButton';
import * as Styled from './BuildingsPage.styled';

const sortOptions = ['name', 'city', 'date added'];

const BuildingsPage = () => (
  <Page title='Buildings'>
    <Styled.BuildingsPageContent>
      <Styled.SortSearchContainer>
        <SortButton text='Sort Buildings' sortOptions={sortOptions} />
        <SearchInput placeholder='Search buildings...' />
      </Styled.SortSearchContainer>
      <BuildingsList />
    </Styled.BuildingsPageContent>
  </Page>
);

export default BuildingsPage;
