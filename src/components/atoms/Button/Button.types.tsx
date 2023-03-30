import { ButtonHTMLAttributes, CSSProperties } from 'react';
import { ColorNames, HexColor } from 'theme/theme.types';
import { IconName } from '../Icon/icon.types';

export const ButtonVariants = ['primary', 'text', 'ghost', 'icon', 'notificationItem'] as const;
type ButtonVariantsType = {
  [key in (typeof ButtonVariants)[number]]: key;
};
export const buttonColors = ['orange', 'blue'] as const;
export type ColorVariant = (typeof buttonColors)[number];

export const BUTTON_VARIANTS: ButtonVariantsType = {
  primary: 'primary',
  text: 'text',
  ghost: 'ghost',
  icon: 'icon',
  notificationItem: 'notificationItem',
} as const;

export type ButtonVariantProps = (typeof ButtonVariants)[number];

export type WrapperProps = {
  wrapper?: true;
  width?: number;
  height?: number;
  marginTop?: number;
  style?: CSSProperties;
};
type WrapperPropsNever = {
  wrapper?: never;
  width?: never;
  height?: never;
  marginTop?: never;
  style?: never;
};

export type IconProps = { icon?: IconName | null; iconSize?: number; iconColor?: ColorNames };

type BasicProps<T extends ButtonVariantProps> = { variant: T; color?: ColorVariant };
type BasicPropsNever = { variant?: never; color?: never };
export type ButtonWrapperProps = BasicPropsNever & WrapperProps & IconProps;

export type PrimaryButtonProps = BasicProps<typeof BUTTON_VARIANTS.primary> &
  WrapperPropsNever &
  IconProps;

export type TextButtonProps = BasicProps<typeof BUTTON_VARIANTS.text> &
  WrapperPropsNever &
  IconProps;

export type GhostButtonProps = BasicProps<typeof BUTTON_VARIANTS.ghost> &
  WrapperPropsNever &
  IconProps;

export type IconButtonProps = BasicProps<typeof BUTTON_VARIANTS.icon> &
  WrapperPropsNever &
  IconProps;

export type NotificationItemButtonProps = BasicProps<typeof BUTTON_VARIANTS.notificationItem> &
  WrapperPropsNever &
  IconProps;

export type ButtonProps = (
  | PrimaryButtonProps
  | TextButtonProps
  | GhostButtonProps
  | IconButtonProps
  | ButtonWrapperProps
  | NotificationItemButtonProps
) &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type StylingProps = {
  styling: {
    bckgColor: HexColor | 'transparent';
    borderColor: HexColor | 'transparent';
    color: HexColor;
    hoverBckgColor: HexColor | 'transparent';
    hoverBorderColor: HexColor | 'transparent';
    paddingTB?: number;
    pressedBckgColor?: HexColor | 'transparent';
    pressedBorderColor?: HexColor | 'transparent';
  };
};

export type ColorVariants = {
  [color in ColorVariant | 'noStyleColor']: {
    [variant in ButtonVariantProps]?: StylingProps['styling'];
  };
};

export type StyledWrapperProps = {
  styling: WrapperProps;
};

export type ButtonWrapperValueType<T> = {
  ButtonWrapper: T;
} & StyledWrapperProps;

export type ButtonsStyleValueType<T> = {
  StyledButton: T;
} & StylingProps;

export type ButtonsStyles<T> = {
  [key2 in ButtonVariantProps]: (color: ColorVariant) => ButtonsStyleValueType<T>;
};

export type ButtonsStyleType<T> = {
  [key in keyof ButtonVariantsType]: ButtonsStyleValueType<T>;
};

export const IsIconNullGuard = (icon: null | IconName): icon is null => icon === null;
