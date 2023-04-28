import { renderWithProviders } from 'utils/test.utils';
import ResidentsPage from './ResidentsPage';

describe('ResidnetsPage', () => {
  it('renders correctly', () => {
    const page = renderWithProviders(<ResidentsPage />, {});
    expect(page).toMatchSnapshot();
  });
});
