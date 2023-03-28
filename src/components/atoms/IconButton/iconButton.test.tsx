import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import IconButton, { IconButtonProps } from './IconButton';

describe('Icon', () => {
  const item = ({ icon, size, color, onClick }: IconButtonProps) =>
    renderWithProviders(<IconButton icon={icon} size={size} color={color} onClick={onClick} />, {});

  afterEach(cleanup);
  it('should renders correctly arrowRight IconButton', () => {
    expect(
      item({
        icon: 'arrowRight',
        size: 20,
        color: 'sidebarTabsPressed',
        onClick: () => null,
      }),
    ).toMatchSnapshot();
  });
});
