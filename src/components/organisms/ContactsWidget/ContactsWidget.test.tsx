import { renderWithProviders } from 'utils/test.utils';
import ContactsWidget from './ContactsWidget';

describe('ContactsWidget', () => {
  it('renders correctly', () => {
    const contactsWidget = renderWithProviders(<ContactsWidget />, {});
    expect(contactsWidget).toMatchSnapshot();
  });
});
