import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import SetNewPassword from './SetNewPassword';

describe('SetNewPassword', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <SetNewPassword />
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
