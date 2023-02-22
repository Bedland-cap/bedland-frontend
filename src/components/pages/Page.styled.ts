import styled from 'styled-components';

const ChildBox = styled.div<{ theme: { color: string } }>`
  align-items: center;
  background-color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default ChildBox;
