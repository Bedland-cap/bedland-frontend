import { renderWithProviders } from 'utils/test.utils';
import BuildingsPage from './BuildingsPage';

describe('BuildingsPage', () => {
  it('renders correctly', () => {
    const page = renderWithProviders(<BuildingsPage />, {});
    expect(page).toMatchSnapshot();
  });
});
