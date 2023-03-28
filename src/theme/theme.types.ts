import { CSSProperties } from 'react';
import { Getters } from 'types/shared.types';

export const colorNames = [
  'sidebarTabsPressed',
  'blueDark',
  'blueLight',
  'orangeLight',
  'orangeDark',
  'light',
  'greyLight',
  'greyDark',
  'greenLight',
  'greenDark',
  'redLight',
  'sidebarTabs',
  'redDark',
  'sidebar',
  'footer',
  'white',
  'inputGrey',
  'widgetsShadows',
  'text',
  'yellow',
] as const;

export const typographyNames = [
  'header1',
  'header2',
  'subtitles',
  'header3',
  'header4',
  'header5',
  'subHeader',
  'paragraph',
  'dataInputsAndTooltips',
  'unerlined',
  'captions',
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
