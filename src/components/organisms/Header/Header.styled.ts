import styled from 'styled-components';
import { HEADER_HEIGHT } from 'utils/constans';
import { PaletteType } from 'theme/theme.types';

type HeaderProps = {
  isLoggedIn: boolean;
  palette: PaletteType;
};

export const HeaderBox = styled.div<HeaderProps>`
  align-items: center;
  background-color: ${({ palette }) => palette.light};
  display: flex;
  gap: 10px;
  height: ${HEADER_HEIGHT}px;
  justify-content: ${({ isLoggedIn }) => (!isLoggedIn ? 'center' : 'flex-start')};
  width: 100%;
`;
export default HeaderBox;
