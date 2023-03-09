import { renderWithProviders } from 'test.utils';
import Icon, { IconProps } from './Icon';

describe('Icon', () => {
  const item = ({ name, size, color, isActive, activeColor }: IconProps) =>
    renderWithProviders(
      <Icon name={name} size={size} color={color} isActive={isActive} activeColor={activeColor} />,
      {},
    );

  it('should render correctly active building icon', () => {
    expect(
      item({
        name: 'building',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active building icon', () => {
    expect(
      item({
        name: 'building',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active residents icon', () => {
    expect(
      item({
        name: 'residents',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active residents icon', () => {
    expect(
      item({
        name: 'residents',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active wall icon', () => {
    expect(
      item({
        name: 'wall',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active wall icon', () => {
    expect(
      item({
        name: 'wall',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active dashboard icon', () => {
    expect(
      item({
        name: 'dashboard',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active dashboard icon', () => {
    expect(
      item({
        name: 'dashboard',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly wall icon', () => {
    expect(
      item({
        name: 'wall',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active reports icon', () => {
    expect(
      item({
        name: 'reports',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active reports icon', () => {
    expect(
      item({
        name: 'reports',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active building voting', () => {
    expect(
      item({
        name: 'voting',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active building voting', () => {
    expect(
      item({
        name: 'voting',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active payments icon', () => {
    expect(
      item({
        name: 'payments',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active payments icon', () => {
    expect(
      item({
        name: 'payments',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly active messages icon', () => {
    expect(
      item({
        name: 'messages',
        size: 20,
        isActive: true,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });

  it('should render correctly not active messages icon', () => {
    expect(
      item({
        name: 'messages',
        size: 20,
        isActive: false,
        color: 'primaryLight',
        activeColor: 'primaryDark',
      }),
    ).toMatchSnapshot();
  });
});