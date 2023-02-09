import styled from "styled-components";

export const ChildBox = styled.div<{ theme: { color: string } }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color};
`;
