import styled from 'styled-components';

const Btn = styled.button<{
  backgroundColor: string;
  textColor: string;
  variant: 'primary' | 'secondary';
}>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid black;
  border-radius: 0.5rem;
  color: ${(props) => props.textColor};
  display: flex;
  height: 2.5rem;
  justify-content: center;
  padding: 0.625rem 1rem 0.625rem 1rem;
  width: 19.875rem;
  &:disabled,
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;
export default Btn;
