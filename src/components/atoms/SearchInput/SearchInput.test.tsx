import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const input = renderWithProviders(<SearchInput placeholder='Search buildings...' />, {});
    expect(input).toMatchSnapshot();
  });
});
