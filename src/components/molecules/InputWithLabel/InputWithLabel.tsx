import { FieldValues, UseFormRegister } from 'react-hook-form';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import InputContainer from './InputWithLabel.styled';

export interface IInputWithLabel {
  label: string;
  input: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}

const InputWithLabel = ({
  label,
  input,
  type = 'text',
  placeholder,
  register,
}: IInputWithLabel) => (
  <InputContainer>
    <Label htmlFor={input} label={label} textColor='white' size='medium' />
    <Input
      input={input}
      placeholder={placeholder}
      register={register}
      type={type}
    />
  </InputContainer>
);

export default InputWithLabel;
