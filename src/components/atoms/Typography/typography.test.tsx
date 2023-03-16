import { cleanup } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { renderWithProviders } from 'utils/test.utils';
import Typography, { TypographyProps } from './Typography';

describe('Typography', () => {
  afterEach(cleanup);
  const item = ({ variant, color, children }: PropsWithChildren<TypographyProps>) =>
    renderWithProviders(
      <Typography variant={variant} color={color}>
        {children}
      </Typography>,
      {},
    );

  it('should renders correctly typography - paragraph', () => {
    expect(
      item({ variant: 'paragraph', color: 'primaryDark', children: 'Paragraph' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly typography - sidebarItem', () => {
    expect(
      item({ variant: 'sidebarItem', color: 'primaryDark', children: 'SidebarItem' }),
    ).toMatchSnapshot();
  });

  it('should renders correctly typography - caption', () => {
    expect(
      item({ variant: 'caption', color: 'primaryDark', children: 'Caption' }),
    ).toMatchSnapshot();
  });
});
