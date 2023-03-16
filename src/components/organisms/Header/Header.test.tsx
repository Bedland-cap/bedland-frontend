import { cleanup, screen } from '@testing-library/react';
import { User } from 'store/reducers/user/user_slice';
import { renderWithProviders } from 'utils/test.utils';
import Header from './Header';

const loggedInManagerUser = {
  loggedIn: true,
  status: 'success',
  error: undefined,
  userId: '122',
  login: 'abcdefghij',
  token: undefined,
  role: 'manager',
} as User;

const loggedInResidentUser = {
  loggedIn: true,
  status: 'success',
  error: undefined,
  userId: '122',
  login: 'abcdefghij',
  token: undefined,
  role: 'resident',
} as User;
describe('Header', () => {
  afterEach(cleanup);
  it('headers renders correctly for logged out user', () => {
    const snapshot = renderWithProviders(<Header />, {});

    expect(snapshot).toMatchSnapshot();
  });
  it('headers renders without dropdown for logged out user', () => {
    renderWithProviders(<Header />, {});
    const dropdown = screen.queryByTestId('dropdown');

    expect(dropdown).toBeFalsy();
  });
  it('header shows dropdown, if a user is logged in ', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    const dropdown = screen.queryByTestId('dropdown');
    expect(dropdown).toBeTruthy();
  });

  it('headers renders correctly for logged in manager', () => {
    const managerHeader = () =>
      renderWithProviders(<Header />, {
        preloadedState: {
          user: loggedInManagerUser,
        },
      });

    expect(managerHeader()).toMatchSnapshot();
  });

  it('headers renders correctly for logged in resident', () => {
    const managerHeader = () =>
      renderWithProviders(<Header />, {
        preloadedState: {
          user: loggedInResidentUser,
        },
      });

    expect(managerHeader()).toMatchSnapshot();
  });
});
