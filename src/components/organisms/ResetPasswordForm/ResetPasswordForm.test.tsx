import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import ThemeProvider from 'theme/ThemeContext';
import ERROR_MESSAGES from 'utils/constants/messages';
import ResetPasswordForm from './ResetPasswordForm';
import { errorMessageHandler, watcher } from './ResetPasswordForm.utils';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate,
}));

describe('ResetPassword Form', () => {
  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ThemeProvider>
          <BrowserRouter>
            <ResetPasswordForm />
          </BrowserRouter>
        </ThemeProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('The password is according to the rules and passwords match', async () => {
    let resetPasswordButton: any | null = null;
    let inputPassword: any | null = null;
    let inputConfirmPassword: any | null = null;

    await act(() => {
      render(
        <ThemeProvider>
          <MemoryRouter initialEntries={['/resetPassword']}>
            <ResetPasswordForm />
          </MemoryRouter>
        </ThemeProvider>,
      );
    });

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText(
        'Confirm the password',
      );

      fireEvent.input(inputPassword, {
        target: {
          value: 'Aaaaaaaaa2.',
        },
      });

      fireEvent.input(inputConfirmPassword, {
        target: {
          value: 'Aaaaaaaaa2.',
        },
      });

      fireEvent.submit(resetPasswordButton as HTMLElement);
    });

    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith('/');
  });

  it('The password is according to the rules and passwords dont match', async () => {
    let resetPasswordButton: any | null = null;
    let inputPassword: any | null = null;
    let inputConfirmPassword: any | null = null;

    await act(() => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <ResetPasswordForm />
          </MemoryRouter>
        </ThemeProvider>,
      );
    });

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText(
        'Confirm the password',
      );

      fireEvent.input(inputPassword, {
        target: {
          value: 'Aaaaaaaaa2.',
        },
      });

      fireEvent.input(inputConfirmPassword, {
        target: {
          value: 'Aaaaaaaaa2',
        },
      });

      fireEvent.submit(resetPasswordButton as HTMLElement);
    });

    expect(
      await screen.getByText(
        ERROR_MESSAGES.resetPasswordPage.passwordsDoesNotMatchUp,
      ),
    ).not.toBeNull();
  });

  it('The password is not according to the rules and passwords match ', async () => {
    let resetPasswordButton: any | null = null;
    let inputPassword: any | null = null;
    let inputConfirmPassword: any | null = null;

    await act(() => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <ResetPasswordForm />
          </MemoryRouter>
        </ThemeProvider>,
      );
    });

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText(
        'Confirm the password',
      );

      fireEvent.input(inputPassword, {
        target: {
          value: 'Aaaaaaaaa2',
        },
      });

      fireEvent.input(inputConfirmPassword, {
        target: {
          value: 'Aaaaaaaaa2',
        },
      });

      fireEvent.submit(resetPasswordButton as HTMLElement);
    });

    // expect(window.location.pathname).toBe('/');

    expect(
      await screen.getByText(
        ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules,
      ),
    ).not.toBeNull();
  });
  it('The password is not according to the rules and passwords dont match ', async () => {
    let resetPasswordButton: any | null = null;
    let inputPassword: any | null = null;
    let inputConfirmPassword: any | null = null;

    await act(() => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <ResetPasswordForm />
          </MemoryRouter>
        </ThemeProvider>,
      );
    });

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText(
        'Confirm the password',
      );

      fireEvent.input(inputPassword, {
        target: {
          value: 'Aaaaaaaaa2',
        },
      });

      fireEvent.input(inputConfirmPassword, {
        target: {
          value: 'Aaaaaaaaa.2',
        },
      });

      fireEvent.submit(resetPasswordButton as HTMLElement);
    });

    // expect(window.location.pathname).toBe('/');

    expect(
      await screen.getByText(
        ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules,
      ),
    ).not.toBeNull();
  });
});
describe('ResetPassword Utils', () => {
  it('should return the correct error message when passwords do not match up', () => {
    const password = 'password123';
    const confirmPassword = 'password1234';

    const result = errorMessageHandler(watcher(password, confirmPassword));

    expect(result).toBe(
      ERROR_MESSAGES.resetPasswordPage.passwordsDoesNotMatchUp,
    );
  });

  it('should return the correct error message when passwords do not meet requirements', () => {
    const password = 'pass';
    const confirmPassword = 'pass';

    const result = errorMessageHandler(watcher(password, confirmPassword));

    expect(result).toBe(ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules);
  });
});
