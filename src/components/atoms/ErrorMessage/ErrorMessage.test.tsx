import renderer from 'react-test-renderer';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders correctly', () => {
    const snapshot = renderer.create(<ErrorMessage>Error message</ErrorMessage>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
