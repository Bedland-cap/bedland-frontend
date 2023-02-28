import { renderWithProviders } from 'test.utils';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import routes from 'App/routing/routes';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  const item = () => renderWithProviders(<Sidebar />, {});

  it('should renders correctly sidebar', () => {
    expect(item()).toMatchSnapshot();
  });

  it('should redirect to Buildings Route when click on item with Buildings label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/buildings/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.buildings);
  });

  it('should redirect to Dashboard Route when click on item with Dashboard label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/dashboard/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.homeForLoggedIn);
  });

  it('should redirect to Reports Route when click on item with Reports label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/reports/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.reports);
  });

  it('should redirect to Messages Route when click on item with Messages label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/messages/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.messages);
  });

  it('should redirect to Wall Route when click on item with Wall label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/wall/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.wall);
  });

  it('should redirect to Payments Route when click on item with Payments label', async () => {
    item();
    await act(() => userEvent.click(screen.getByText(/payments/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.payments);
  });

  it('should redirect to Voting Route when click on item with Voting label', async () => {
    item();

    await act(async () => userEvent.click(screen.getByText(/voting/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.voting);
  });

  it('should redirect to Residents Route when click on item with Residents label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/residents/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.residents);
  });
});
