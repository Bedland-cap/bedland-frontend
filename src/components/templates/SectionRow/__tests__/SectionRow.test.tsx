import { render } from 'test.utils';
import SectionRow from '../SectionRow';

describe('Login Page Template', () => {
  const item = () => render(<SectionRow />, {});
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
