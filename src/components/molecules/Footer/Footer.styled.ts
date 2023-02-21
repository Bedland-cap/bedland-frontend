import styled from 'styled-components';

const FooterBox = styled.div<{ backgroundColor: string }>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  display: flex;
  height: 3.3125rem;
  justify-content: center;
  width: 100vw;
`;

export default FooterBox;
