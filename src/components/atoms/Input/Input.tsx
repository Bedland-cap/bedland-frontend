import { HTMLInputTypeAttribute, useContext } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ThemeContext } from 'theme/ThemeContext';
import LoginInput from './Input.styled';

const inputValues = ['login', 'password'] as const;

type InputValues = (typeof inputValues)[number];

type Getters<T extends string, K> = {
  [k in T]: K;
};

type TRegister = {
  pattern: RegExp;
  required: boolean;
  maxLength: number;
  minLength: number;
};

export type LoginRegexProps = Getters<InputValues, TRegister>;

export interface InputProps {
  input: InputValues;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  regexPattern: TRegister;
}

const Input = ({ input, type = 'text', placeholder, regexPattern, register }: InputProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <LoginInput
      id={input}
      type={type}
      placeholder={placeholder}
      borderColor={palette.primaryLight}
      {...register(input, { ...regexPattern })}
    />
  );
};

export default Input;
