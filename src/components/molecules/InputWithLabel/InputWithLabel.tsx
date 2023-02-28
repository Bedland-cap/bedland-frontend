import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import { FC } from 'react';
import { IInput } from 'components/atoms/Input/Input.types';
import { IInputWithLabel } from './InputWithLabel.types';
import InputContainer from './InputWithLabel.styled';

const InputWithLabel: FC<IInputWithLabel & IInput> = ({
  label,
  input,
  type = 'text',
  placeholder,
  register,
  registerOptions = null,
  regexPattern,
}) => (
  <InputContainer>
    <Label htmlFor={input} label={label} textColor='white' size='medium' />
    <Input
      input={input}
      placeholder={placeholder}
      register={register}
      type={type}
      registerOptions={registerOptions}
      regexPattern={regexPattern}
    />
  </InputContainer>
);

export default InputWithLabel;
