import LogoImg from 'assets/img/Logo.png';
import { useContext } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user_slice';
import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';

type HeaderProps = {
  isLoggedIn: boolean;
  palette: PaletteType;
};

const HeaderBox = styled.div<HeaderProps>`
  align-items: center;
  background-color: ${({ palette }) => palette.light};
  display: sticky;
  gap: 10px;
  height: 90px;
  justify-content: ${({ isLoggedIn }) => (isLoggedIn ? 'center' : 'flex-start')};
  width: 100%;
  & > img {
    margin: ${({ isLoggedIn }) => (isLoggedIn === false ? '2rem' : '1rem')};
  }
`;

const Header = () => {
  const isLoggedIn: boolean = useAppSelector(selectUserIsLoggedIn);
  const { palette } = useContext(ThemeContext);
  return (
    <nav>
      <HeaderBox isLoggedIn={isLoggedIn} palette={palette}>
        <img src={LogoImg} alt='Logo Bedland' />
      </HeaderBox>
    </nav>
  );
};

export default Header;
