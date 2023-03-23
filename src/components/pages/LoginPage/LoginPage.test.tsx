import { fireEvent, screen, act, waitFor, cleanup } from '@testing-library/react';
import routes from 'App/routing/routes';
import { loggedOutManagerUser, loggedOutResidentUser, mockUserCredentials } from 'utils/mockUser';
import { renderWithProviders } from 'utils/test.utils';
import LoginPage from './LoginPage';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Login Page', () => {
  afterEach(cleanup);
  afterEach(() => jest.clearAllMocks());
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<LoginPage />, {});
    expect(snapshot).toMatchSnapshot();
  });

  it('Navigate after correct Login for resident', async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        user: loggedOutResidentUser,
      },
      initialUrl: routes.homeForNotLoggedIn,
    });

    await act(async () => {
      const login = screen.getByTestId('login') as HTMLInputElement;
      const password = screen.getByTestId('password') as HTMLInputElement;
      const loginBtn = screen.getByRole('button');
      fireEvent.change(login, { target: { value: mockUserCredentials.residentUsername } });
      fireEvent.change(password, { target: { value: mockUserCredentials.password } });
      fireEvent.click(loginBtn);
    });

    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith(routes.homeForLoggedIn);
    });
  });
  it('Navigate after correct Login for manager', async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        user: loggedOutManagerUser,
      },
      initialUrl: routes.homeForNotLoggedInManager,
    });

    await act(async () => {
      const login = screen.getByTestId('login') as HTMLInputElement;
      const password = screen.getByTestId('password') as HTMLInputElement;
      const loginBtn = screen.getByRole('button');
      fireEvent.change(login, { target: { value: mockUserCredentials.managerUsername } });
      fireEvent.change(password, { target: { value: mockUserCredentials.password } });
      fireEvent.click(loginBtn);
    });

    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith(routes.homeForLoggedIn);
    });
  });
  it('Dont navigate after incorrect login for resident', async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        user: loggedOutResidentUser,
      },
      initialUrl: routes.homeForNotLoggedIn,
    });

    await act(async () => {
      const login = screen.getByTestId('login') as HTMLInputElement;
      const password = screen.getByTestId('password') as HTMLInputElement;
      const loginBtn = screen.getByRole('button');
      fireEvent.change(login, { target: { value: mockUserCredentials.managerUsername } });
      fireEvent.change(password, { target: { value: mockUserCredentials.password } });
      fireEvent.click(loginBtn);
    });

    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.homeForNotLoggedIn);
  });
});
