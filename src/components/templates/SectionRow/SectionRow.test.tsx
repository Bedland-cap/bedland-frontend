import renderer from 'react-test-renderer';
import SectionRow from './SectionRow';

describe('Login Page Template', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <SectionRow>
          <div>renders correctly</div>
        </SectionRow>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
