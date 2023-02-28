import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';

import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import LoginPage from './LoginPage';

describe('Login Page', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <Provider store={reduxStore}>
              <LoginPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
