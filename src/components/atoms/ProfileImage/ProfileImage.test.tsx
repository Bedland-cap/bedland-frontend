import Avatar from 'assets/img/Avatar.svg';
import { renderWithProviders } from 'test.utils';
import ProfileImage from './ProfileImage';

describe('ProfileImage', () => {
  it('renders correctly', () => {
    const messageItem = renderWithProviders(<ProfileImage src={Avatar} size={1.5} />, {});
    expect(messageItem).toMatchSnapshot();
  });
});
