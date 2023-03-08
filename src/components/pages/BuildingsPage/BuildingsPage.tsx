import SearchInput from 'components/atoms/SearchInput/SearchInput';
import BuildingsList from 'components/organisms/BuildingsList/BuildingsList';
import Page from 'components/templates/Page/Page';
import * as Styled from './BuildingsPage.styled';

const BuildingsPage = () => (
  <Page title='Buildings'>
    <Styled.BuildingsPageContent>
      <Styled.SearchInputContainer>
        <SearchInput placeholder='Search buildings...' />
      </Styled.SearchInputContainer>
      <BuildingsList />
    </Styled.BuildingsPageContent>
  </Page>
);

export default BuildingsPage;
