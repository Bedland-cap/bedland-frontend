import { render } from 'test.utils';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  const item = () => render(<Sidebar />, {});

  it('should renders correctly sidebar', () => {
    expect(item()).toMatchSnapshot();
  });

  it('should redirect to Buildings Route when click on item with Buildings label', async () => {
    act(() => item());
    await userEvent.click(screen.getByText(/buildings/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/buildings');
  });

  it('should redirect to Dashboard Route when click on item with Dashboard label', async () => {
    act(() => item());

    await userEvent.click(screen.getByText(/dashboard/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/');
  });

  it('should redirect to Reports Route when click on item with Reports label', async () => {
    act(() => item());

    await userEvent.click(screen.getByText(/reports/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/reports');
  });

  it('should redirect to Messages Route when click on item with Messages label', async () => {
    act(() => item());

    await userEvent.click(screen.getByText(/messages/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/messages');
  });

  it('should redirect to Wall Route when click on item with Wall label', async () => {
    act(() => item());
    await userEvent.click(screen.getByText(/wall/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/wall');
  });

  it('should redirect to Payments Route when click on item with Payments label', async () => {
    act(() => item());
    await userEvent.click(screen.getByText(/payments/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/payments');
  });

  // add when we add info about isResident or is Manager from store to sidebar

  /*  it('should redirect to Flat Route when click on item with Flat label', async () => {
    
    item();
    await userEvent.click(screen.getByText(/flats/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/flats');
  }); */

  it('should redirect to Voting Route when click on item with Voting label', async () => {
    act(() => item());

    await userEvent.click(screen.getByText(/voting/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/voting');
  });

  it('should redirect to Residents Route when click on item with Residents label', async () => {
    act(() => item());

    await userEvent.click(screen.getByText(/residents/i));
    expect(screen.getByTestId('location-display').innerHTML).toEqual('/residents');
  });
});
