import { renderWithProviders } from 'utils/test.utils';
import Footer from './Footer';

describe('Footer', () => {
  const item = () => renderWithProviders(<Footer />, {});
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
