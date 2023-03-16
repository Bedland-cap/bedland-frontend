import { PropsWithChildren } from 'react';
import * as Styled from './Button.styled';

type ButtonProps = {
  backgroundColor: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  textColor: string;
  variant: 'primary' | 'secondary';
};

const Button = ({
  backgroundColor,
  textColor,
  children,
  type = 'button',
  variant = 'primary',
}: PropsWithChildren<ButtonProps>) => (
  <Styled.Btn type={type} backgroundColor={backgroundColor} textColor={textColor} variant={variant}>
    {children}
  </Styled.Btn>
);

export default Button;
