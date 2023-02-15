import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({ label, ...props }: ButtonProps) => {
  const { primary, size, backgroundColor } = props;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  primary: false,
  backgroundColor: '#ffffff',
  size: 'medium',
  onClick: {},
};

export default Button;
