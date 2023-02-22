import Input, { InputProps } from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import InputContainer from './InputWithLabel.styled';

type LabelProps = {
  label: string;
};

const InputWithLabel = ({
  label,
  input,
  type = 'text',
  placeholder,
  register,
  regexPattern,
}: InputProps & LabelProps) => (
  <InputContainer>
    <Label htmlFor={input} label={label} textColor='white' size='medium' />
    <Input
      input={input}
      placeholder={placeholder}
      register={register}
      type={type}
      regexPattern={regexPattern}
    />
  </InputContainer>
);

export default InputWithLabel;
