import { act, fireEvent, screen, cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import ERROR_MESSAGES from 'utils/messages';
import ResetPasswordForm from './ResetPasswordForm';
import { handleErrorMessage, watcher } from './ResetPasswordForm.utils';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('ResetPassword Form', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<ResetPasswordForm />, {});
    expect(snapshot).toMatchSnapshot();
  });

  it('The password is according to the rules and passwords match', async () => {
    renderWithProviders(<ResetPasswordForm />, {});
    let resetPasswordButton: Element | null = null;
    let inputPassword: Element | null = null;
    let inputConfirmPassword: Element | null = null;

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText('Confirm the password');

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
    renderWithProviders(<ResetPasswordForm />, {});
    let resetPasswordButton: Element | null = null;
    let inputPassword: Element | null = null;
    let inputConfirmPassword: Element | null = null;

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText('Confirm the password');

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
      await screen.getByText(ERROR_MESSAGES.resetPasswordPage.passwordsDoesNotMatchUp),
    ).not.toBeNull();
  });

  it('The password is not according to the rules and passwords match ', async () => {
    renderWithProviders(<ResetPasswordForm />, {});
    let resetPasswordButton: Element | null = null;
    let inputPassword: Element | null = null;
    let inputConfirmPassword: Element | null = null;

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText('Confirm the password');

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
      await screen.getByText(ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules),
    ).not.toBeNull();
  });
  it('The password is not according to the rules and passwords dont match ', async () => {
    renderWithProviders(<ResetPasswordForm />, {});
    let resetPasswordButton: Element | null = null;
    let inputPassword: Element | null = null;
    let inputConfirmPassword: Element | null = null;

    await act(async () => {
      resetPasswordButton = screen.getByRole('button');
      inputPassword = screen.getByPlaceholderText('Enter your new password');
      inputConfirmPassword = screen.getByPlaceholderText('Confirm the password');

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
      await screen.getByText(ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules),
    ).not.toBeNull();
  });
});
describe('ResetPassword Utils', () => {
  it('should return the correct error message when passwords do not match up', () => {
    const password = 'password123';
    const confirmPassword = 'password1234';

    const result = handleErrorMessage(watcher(password, confirmPassword));

    expect(result).toBe(ERROR_MESSAGES.resetPasswordPage.passwordsDoesNotMatchUp);
  });

  it('should return the correct error message when passwords do not meet requirements', () => {
    const password = 'pass';
    const confirmPassword = 'pass';

    const result = handleErrorMessage(watcher(password, confirmPassword));

    expect(result).toBe(ERROR_MESSAGES.resetPasswordPage.notWithPasswordsRules);
  });
});
