import Avatar from 'assets/img/Avatar.svg';
import { renderWithProviders } from 'test.utils';
import MessageItem from './MessageItem';

describe('MessageItem', () => {
  it('active renders correctly', () => {
    const messageItem = renderWithProviders(
      <MessageItem name='Jessie Burton' image={Avatar} active />,
      {},
    );

    expect(messageItem).toMatchSnapshot();
  });

  it('inactive renders correctly', () => {
    const messageItem = renderWithProviders(
      <MessageItem name='Jessie Burton' image={Avatar} active={false} />,
      {},
    );
    expect(messageItem).toMatchSnapshot();
  });
});
