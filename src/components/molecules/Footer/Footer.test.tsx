import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(<Footer backgroundColor='#ffffff' />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
