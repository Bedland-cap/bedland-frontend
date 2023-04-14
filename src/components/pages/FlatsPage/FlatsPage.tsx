import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Page from 'components/templates/Page/Page';
// eslint-disable-next-line import/no-named-default
import { default as FlatsList } from 'components/organisms/DisplayList/DisplayList';
import * as Styled from './FlatsPage.styled';

const FlatsPage = () => (
  <Page title='Flats'>
    <Styled.FlatsPageContent>
      <Styled.SearchInputContainer>
        <SearchInput placeholder='Search flats...' />
      </Styled.SearchInputContainer>
      <FlatsList />
    </Styled.FlatsPageContent>
  </Page>
);

export default FlatsPage;
