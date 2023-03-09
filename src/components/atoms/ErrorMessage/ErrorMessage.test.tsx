import { renderWithProviders } from 'test.utils';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<ErrorMessage>Error message</ErrorMessage>, {});
    expect(snapshot).toMatchSnapshot();
  });
});
