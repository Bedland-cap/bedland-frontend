import * as Styled from './Label.styled';

interface ILabel {
  htmlFor: string;
  label: string;
  textColor: string;
  size: 'small' | 'medium' | 'large';
}

const Label = ({ htmlFor, label, textColor, size }: ILabel) => (
  <Styled.Lbl htmlFor={htmlFor} textColor={textColor} size={size}>
    {label}
  </Styled.Lbl>
);

export default Label;
