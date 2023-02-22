import renderer from 'react-test-renderer';
import Label from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(<Label label='login' htmlFor='login' textColor='white' size='small' />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
