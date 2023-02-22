import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import LoginForm from './LoginForm';

describe('Login Form', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
