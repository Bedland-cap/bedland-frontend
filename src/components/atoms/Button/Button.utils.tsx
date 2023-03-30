import initialTheme from 'theme/initialTheme';
import { colorNames, ColorNames, HexColor } from 'theme/theme.types';
import {
  ButtonsStyleValueType,
  ButtonVariantProps,
  WrapperProps,
  ButtonWrapperValueType,
  BUTTON_VARIANTS,
  ButtonsStyles,
  ColorVariants,
  ColorVariant,
  StylingProps,
} from './Button.types';
import * as Styled from './Button.styled';

export const COLOR_VARIANTS: ColorVariants = {
  orange: {
    primary: {
      bckgColor: initialTheme.palette.orangeDark,
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.orangeLight,
      hoverBorderColor: initialTheme.palette.orangeLight,
    },
    text: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.orangeLight,
      hoverBckgColor: `${initialTheme.palette.orangeLight}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.orangeLight}26`,
      pressedBorderColor: 'transparent',
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.orangeDark,
      hoverBckgColor: `${initialTheme.palette.orangeDark}1A`,
      hoverBorderColor: initialTheme.palette.orangeDark,
    },
  },
  blue: {
    primary: {
      bckgColor: initialTheme.palette.blueDark,
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.blueLight,
      hoverBorderColor: initialTheme.palette.blueLight,
    },
    text: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.blueDark}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.blueDark}26`,
      pressedBorderColor: 'transparent',
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.blueDark}1A`,
      hoverBorderColor: initialTheme.palette.blueDark,
    },
  },
  noStyleColor: {
    primary: {
      bckgColor: 'transparent',
      borderColor: 'transparent',
      color: initialTheme.palette.blueDark,
      hoverBckgColor: `${initialTheme.palette.orangeLight}0D`,
      hoverBorderColor: 'transparent',
      pressedBckgColor: `${initialTheme.palette.orangeLight}26`,
      pressedBorderColor: 'transparent',
    },
  },
};

export const BUTTONS_STYLES: ButtonsStyles<typeof Styled.PrimaryButton> = {
  primary: (color) => ({
    StyledButton: Styled.PrimaryButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.primary] as StylingProps['styling'],
  }),
  text: (color) => ({
    StyledButton: Styled.TextButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.text] as StylingProps['styling'],
  }),
  ghost: (color) => ({
    StyledButton: Styled.GhostButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.ghost] as StylingProps['styling'],
  }),
  icon: () => ({
    StyledButton: Styled.IconButton,
    styling: COLOR_VARIANTS.noStyleColor[BUTTON_VARIANTS.primary] as StylingProps['styling'],
  }),
  notificationItem: (color) => ({
    StyledButton: Styled.GhostButton,
    styling: {
      ...(COLOR_VARIANTS[color][BUTTON_VARIANTS.ghost] as StylingProps['styling']),
      paddingTB: 0.3125,
    },
  }),
};

export const getStyledButton = (
  variant: ButtonVariantProps,
  color: ColorVariant,
): ButtonsStyleValueType<typeof Styled.PrimaryButton> => BUTTONS_STYLES[variant](color);

export const getWrapper = ({
  width,
  height,
  marginTop,
}: WrapperProps): ButtonWrapperValueType<typeof Styled.ButtonWrapper> => ({
  ButtonWrapper: Styled.ButtonWrapper,
  styling: {
    width,
    height,
    marginTop,
  },
});

export const getIconColor = (color: HexColor): ColorNames =>
  colorNames.find((key) => initialTheme.palette[key] === color) as ColorNames;
