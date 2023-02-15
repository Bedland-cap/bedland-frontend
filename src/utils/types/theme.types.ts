type PaletteType = {
  primaryLight: string;
  primaryDark: string;
  secondaryLight: string;
  secondaryDark: string;
  light: string;
  accent: string;
  greyLight: string;
  greyDark: string;
  success: string;
  successDeep: string;
  danger: string;
  sidebarTabs: string;
  notificationCircle: string;
};

type TypographyPropertiesType = {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

type TypographyType = {
  paragraph: TypographyPropertiesType;
  caption: TypographyPropertiesType;
};

export type Theme = {
  palette: PaletteType;
  typography: TypographyType;
};
