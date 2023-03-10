import { renderWithProviders } from 'test.utils';
import { screen } from '@testing-library/react';
import AccountInfo from './AccountInfo';

describe('Account info', () => {
  it('renders correctly for role manager', () => {
    const snapshot = renderWithProviders(
      <AccountInfo userRole='manager' userLogin='John Doe' />,
      {},
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly for role resident', () => {
    const snapshot = renderWithProviders(
      <AccountInfo userRole='resident' userLogin='John Doe' />,
      {},
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('Account Info shows correct data', async () => {
    renderWithProviders(<AccountInfo userRole='resident' userLogin='John Doe' />, {});
    const userName = await screen.getByText('John Doe');
    const userRole = await screen.getByText('resident');
    expect(userName).toBeTruthy();
    expect(userRole).toBeTruthy();
  });
});