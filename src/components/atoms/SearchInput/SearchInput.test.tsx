import { renderWithProviders } from 'utils/test.utils';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders correctly', () => {
    const input = renderWithProviders(<SearchInput placeholder='Search buildings...' />, {});
    expect(input).toMatchSnapshot();
  });
});
