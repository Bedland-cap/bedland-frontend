import renderer from 'react-test-renderer';
import ThemeProvider from 'theme/ThemeContext';
import Header from './Header';

describe('Header', () => {
  it('renders correctly if logged is false', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <Header variant='resident' logged={false} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('renders correctly if logged is true', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <Header variant='resident' logged />
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
