import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import LoginInput from './Input.styled';
import { IInput } from './Input.types';

const Input = ({
  input,
  type = 'text',
  placeholder,
  register,
  registerOptions = null,
  regexPattern,
}: IInput) => {
  const { palette } = useContext(ThemeContext);

  return (
    <LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.primaryLight}
      {...register(input, { ...regexPattern, ...registerOptions })}
    />
  );
};

export default Input;
