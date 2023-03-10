import { renderWithProviders } from 'test.utils';
import { fireEvent, screen } from '@testing-library/react';
import AccountDropdown from './AccountDropdown';

describe('AccountDropdown', () => {
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<AccountDropdown />, {});

    expect(snapshot).toMatchSnapshot();
  });

  it('dropdown opens', async () => {
    renderWithProviders(<AccountDropdown />, {});
    const dropdown = screen.getByTestId('dropdown');
    await fireEvent.click(dropdown);
    const dropdownOpen = await screen.getByTestId('dropdown-open');
    expect(dropdownOpen).toBeTruthy();
  });
  it('dropdown closes when clicked outside', async () => {
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
});
