/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import loginRegexPattern from 'utils/constants/loginRegexPatterns';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ThemeContext } from 'theme/ThemeContext';
import LoginInput from './Input.styled';

export interface IInput {
  input: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({ input, type = 'text', placeholder, register }: IInput) => {
  const { palette } = useContext(ThemeContext);

  return (
    <LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.primaryLight}
      {...register(input, { ...loginRegexPattern[input] })}
    />
  );
};

export default Input;
