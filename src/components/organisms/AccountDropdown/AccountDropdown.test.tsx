import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import routes from 'App/routing/routes';
import AccountDropdown from './AccountDropdown';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate,
}));
describe('AccountDropdown', () => {
  afterEach(cleanup);
  afterEach(() => jest.clearAllMocks());
  it('Renders correctly', () => {
    const snapshot = renderWithProviders(<AccountDropdown />, {});
    expect(snapshot).toMatchSnapshot();
  });

  it('Dropdown opens', async () => {
    renderWithProviders(<AccountDropdown />, {});
    const dropdown = screen.getByTestId('dropdown');
    await fireEvent.click(dropdown);
    const dropdownOpen = await screen.getByTestId('dropdown-open');
    expect(dropdownOpen).toBeTruthy();
  });
  it('Dropdown closes when clicked outside', async () => {
    renderWithProviders(
      <div>
        <AccountDropdown /> <p data-testid='close-dropdown'>close dropdown</p>
      </div>,
      {},
    );
    const dropdown = screen.getByTestId('dropdown');
    const closeDropdown = screen.getByTestId('close-dropdown');
    await fireEvent.click(dropdown);
    await fireEvent.click(closeDropdown);
    const dropdownOpen = await screen.queryByTestId('dropdown-open');

    expect(dropdownOpen).toBeFalsy();
  });

  it('Manager user successfully logouts', async () => {
    renderWithProviders(<AccountDropdown />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });

    const dropdown = screen.getByTestId('dropdown');
    fireEvent.click(dropdown);
    const logoutBtn = screen.getByText('Log out');
    fireEvent.click(logoutBtn);

    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith(routes.homeForNotLoggedInManager);
    });
  });
  it('Resident user successfully logouts', async () => {
    renderWithProviders(<AccountDropdown />, {
      preloadedState: {
        user: loggedInResidentUser,
      },
    });

    const dropdown = screen.getByTestId('dropdown');
    fireEvent.click(dropdown);
    const logoutBtn = screen.getByText('Log out');
    fireEvent.click(logoutBtn);

    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith(routes.homeForNotLoggedIn);
    });
  });
});
