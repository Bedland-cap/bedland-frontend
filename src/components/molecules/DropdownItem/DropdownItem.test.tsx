import routes from 'App/routing/routes';
import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, cleanup } from '@testing-library/react';

import DropdownItem from './DropdownItem';

describe('DropdownItem', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderWithProviders(
      <DropdownItem linkRoute={routes.account} iconName='user' label='My Account' color='text' />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });
  it('dropdown item redirects correctly', async () => {
    renderWithProviders(
      <DropdownItem linkRoute={routes.account} iconName='user' label='My Account' color='text' />,
      {},
    );
    const dropdownitem = screen.getByTestId('dropdown-item');
    await fireEvent.click(dropdownitem);

    expect(window.location.href).toEqual(`http://localhost${routes.account}`);
  });
});
