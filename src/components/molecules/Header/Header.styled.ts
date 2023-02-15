import styled from 'styled-components';

export const HeaderBox = styled.div<{ theme: { variant: string } }>`
  align-items: center;
  background-color: #fcfeff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 90px;
  justify-content: ${({ theme }) => (theme.variant === true ? 'center' : 'flex-start')};
  width: 100%;
`;

export const Logo = styled.img`
  margin-left: ${({ theme }) => (theme.variant === false ? '32px' : '0px')};
`;
