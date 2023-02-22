import { render } from 'test.utils';
import Footer from '../Footer';

describe('Footer', () => {
  const item = () => render(<Footer />, {});
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
