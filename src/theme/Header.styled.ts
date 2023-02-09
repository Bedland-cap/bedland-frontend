import styled from "styled-components";

export const HeaderBox = styled.div<{ theme: { variant: string } }>`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ theme }) =>
    theme.variant === true ? "center" : "flex-start"};
  align-items: center;
  gap: 10px;
  background-color: #fcfeff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  margin-left: ${({ theme }) => (theme.variant === false ? "32px" : "0px")};
`;
