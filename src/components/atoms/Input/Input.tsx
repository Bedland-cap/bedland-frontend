import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './Input.styled';
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
    <Styled.LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.primaryLight}
      {...register(input, { ...regexPattern, ...registerOptions })}
    />
  );
};

export default Input;
