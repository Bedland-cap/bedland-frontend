import { renderWithProviders } from 'test.utils';
import Page from './Page';

describe('MainBody', () => {
  it('should renders correctly Page', () => {
    const item = () => renderWithProviders(<Page />, {});

    expect(item()).toMatchSnapshot();
  });
});
