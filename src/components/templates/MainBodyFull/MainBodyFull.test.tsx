import { render } from 'utils/test.utils';
import MainBodyFull from './MainBodyFull';

describe('Login Page Template', () => {
  const item = () => render(<MainBodyFull />, {});
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
