import { renderWithProviders } from 'test.utils';
import NotificationWidget from './NotificationWidget';

describe('NotificationWidget', () => {
  it('renders correctly NotificationWidget', () => {
    const notificationWidget = renderWithProviders(<NotificationWidget />, {});
    expect(notificationWidget).toMatchSnapshot();
  });
});
