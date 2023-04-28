import Page from 'components/templates/Page/Page';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import GenericTable from 'components/organisms/GenericTable/GenericTable';
import { residentsDetailsNodes } from 'utils/mock/mockGenericTable';
import { TABLE_NAMES } from 'components/organisms/GenericTable/GenericTable.types';
import * as Styled from './ResidentsPage.styled';

const ResidentsPage = () => (
  <Page title='Residents'>
    <Styled.ResidentsPageContent>
      <Styled.UpperBar>
        <Styled.SortSearchContainer>
          <div>Here goes filter button</div>
          <SearchBar placeholder='Search residents...' />
        </Styled.SortSearchContainer>
      </Styled.UpperBar>

      <GenericTable nodes={residentsDetailsNodes} isSelect tableName={TABLE_NAMES.residentsTable} />
    </Styled.ResidentsPageContent>
  </Page>
);

export default ResidentsPage;
