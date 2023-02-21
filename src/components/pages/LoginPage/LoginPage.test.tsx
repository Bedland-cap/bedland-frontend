import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';

import LoginPage from './LoginPage';

describe('Login Page', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
