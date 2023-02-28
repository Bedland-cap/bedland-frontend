import { Getters } from 'types/shared.types';
import { CSSProperties } from 'react';

export const colorNames = [
  'primaryLight',
  'primaryDark',
  'secondaryLight',
  'secondaryDark',
  'light',
  'accent',
  'greyLight',
  'greyDark',
  'success',
  'successDeep',
  'danger',
  'sidebarTabs',
  'badge',
  'default',
  'background',
  'footer',
] as const;

export const typographyNames = [
  'pageTitle',
  'sectionTitle',
  'sidebarItem',
  'paragraph',
  'caption',
] as const;

export type ColorNames = (typeof colorNames)[number];
export type HexColor = `#${string}`;

export type PaletteType = Getters<ColorNames, HexColor>;

export type TypographyName = (typeof typographyNames)[number];

type TypographyType = Getters<TypographyName, CSSProperties>;

export type Theme = {
  palette: PaletteType;
  typography: TypographyType;
};

export type Palette = Pick<Theme, 'palette'>;
