import { PropsWithChildren } from 'react';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import { IsIconNullGuard, ButtonProps, BUTTON_VARIANTS } from './Button.types';
import { getStyledButton, getIconColor, getWrapper } from './Button.utils';

const Button = ({
  wrapper,
  width,
  height,
  marginTop = 0,
  style = {},

  variant = BUTTON_VARIANTS.primary,
  color = 'orange',

  icon = null,
  iconSize = 20,
  iconColor,
  children,
  ...otherProps
}: PropsWithChildren<ButtonProps>) => {
  if (wrapper) {
    const { ButtonWrapper, styling } = getWrapper({ width, height, marginTop });
    return (
      <ButtonWrapper styling={styling} style={style}>
        {children}
      </ButtonWrapper>
    );
  }

  const { StyledButton, styling } = getStyledButton(variant, color);
  const iconClr = iconColor || getIconColor(styling.color);

  return (
    <StyledButton styling={styling} {...otherProps}>
      {!IsIconNullGuard(icon) ? (
        <Icon name={icon} size={iconSize} color={iconClr} isActive={false} />
      ) : null}
      <Typography variant='header4' style={{ color: styling.color }}>
        {children}
      </Typography>
    </StyledButton>
  );
};

export default Button;
