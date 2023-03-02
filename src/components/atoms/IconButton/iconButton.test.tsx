import { renderWithProviders } from 'test.utils';
import IconButton, { IconButtonProps } from './IconButton';

describe('Icon', () => {
  const item = ({ icon, size, color, onClick }: IconButtonProps) =>
    renderWithProviders(<IconButton icon={icon} size={size} color={color} onClick={onClick} />, {});

  it('should renders correctly arrowRight IconButton', () => {
    expect(
      item({
        icon: 'arrowRight',
        size: 20,
        color: 'primaryLight',
        onClick: () => null,
      }),
    ).toMatchSnapshot();
  });
});
