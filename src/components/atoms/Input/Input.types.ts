import { FieldValues, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

type Input = 'login' | 'password' | 'confirmPassword' | 'Name';

export type RegisterOptions = { validate: (value: string) => boolean } | null;

export interface IInput {
  input: Input;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
}
