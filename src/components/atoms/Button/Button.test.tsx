import renderer from 'react-test-renderer';
import ThemeProvider from 'theme/ThemeContext';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <Button backgroundColor='#ffffff' type='button' variant='primary' textColor='#ffffff'>
            login
          </Button>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
