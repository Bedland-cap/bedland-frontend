import styled from 'styled-components';

type TStyledHeader = {
  theme: { logged: boolean; color: string };
};

export const HeaderBox = styled.div<TStyledHeader>`
  align-items: center;
  background-color: ${({ theme }) => theme.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  height: 4.375rem;
  justify-content: ${({ theme }) =>
    theme.logged ? 'space-between' : 'center'};
  padding-right: 1.25rem;
  width: 100%;
`;

export const Logo = styled.img<TStyledHeader>`
  margin-left: ${({ theme }) => (theme.logged ? '2rem' : '0rem')};
`;
