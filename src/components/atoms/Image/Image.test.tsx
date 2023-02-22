import renderer from 'react-test-renderer';
import DefaultImage from 'assets/Loginlogo.svg';

import Image from './Image';

describe('Image', () => {
  it('snapshot renders correctly', () => {
    const snapshot = renderer.create(<Image src={DefaultImage} alt='image' />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
