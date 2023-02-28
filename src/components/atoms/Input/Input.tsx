/* eslint-disable react/jsx-props-no-spreading */
// without changing lint rules this component will block many tests,
// and block the build itself.
import { useContext } from 'react';
import loginRegexPattern from 'utils/constants/loginRegexPatterns';
import { ThemeContext } from 'theme/ThemeContext';
import LoginInput from './Input.styled';
import { IInput } from './Input.types';

const Input = ({
  input,
  type = 'text',
  placeholder,
  register,
  registerOptions = null,
}: IInput) => {
  const { palette } = useContext(ThemeContext);

  return (
    <LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.primaryLight}
      {...register(input, { ...loginRegexPattern[input], ...registerOptions })}
    />
  );
};

export default Input;
