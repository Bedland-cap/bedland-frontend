import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen } from '@testing-library/react';
import routes from 'App/routing/routes';
import PaymentWidget from './PaymentWidget';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Payment Widget ', () => {
  const widget = () => renderWithProviders(<PaymentWidget />, {});

  it('should render correctly', () => {
    expect(widget()).toMatchSnapshot();
  });

  it('should navigate to paymentPage', async () => {
    widget();
    const paymentWidget = await screen.findByRole('button');
    fireEvent.click(paymentWidget);

    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith(routes.payments);
  });
});
