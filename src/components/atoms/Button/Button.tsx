import Btn from './Button.styled';

interface ButtonProps {
  backgroundColor: string;
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  textColor: string;
  variant: 'primary' | 'secondary';
}

const Button = ({
  backgroundColor,
  textColor,
  children,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => (
  <Btn
    type={type}
    backgroundColor={backgroundColor}
    textColor={textColor}
    variant={variant}
  >
    {children}
  </Btn>
);

export default Button;
