import Lbl from './Label.styled';

interface ILabel {
  htmlFor: string;
  label: string;
  textColor: string;
  size: 'small' | 'medium' | 'large';
}

const Label = ({ htmlFor, label, textColor, size }: ILabel) => (
  <Lbl htmlFor={htmlFor} textColor={textColor} size={size}>
    {label}
  </Lbl>
);

export default Label;
