import routes from 'App/routing/routes';
import LogoManager from 'assets/img/LogoManager.svg';
import LogoResident from 'assets/img/LogoResident.svg';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user_slice';
import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';
import { HEADER_HEIGHT } from 'utils/constans';

type HeaderProps = {
  isLoggedIn: boolean;
  palette: PaletteType;
};

const HeaderBox = styled.div<HeaderProps>`
  align-items: center;
  background-color: ${({ palette }) => palette.light};
  display: flex;
  gap: 10px;
  height: ${HEADER_HEIGHT}px;
  justify-content: ${({ isLoggedIn }) => (!isLoggedIn ? 'center' : 'flex-start')};
  width: 100%;
`;

const Header = () => {
  const isLoggedIn: boolean = useAppSelector(selectUserIsLoggedIn);
  const location = useLocation();
  const userRole = useAppSelector((state) => state.user.role);
  const { palette } = useContext(ThemeContext);
  return (
    <nav>
      <HeaderBox isLoggedIn={isLoggedIn} palette={palette}>
        <img
          src={
            userRole === 'manager' || location.pathname === routes.homeForNotLoggedInManager
              ? LogoManager
              : LogoResident
          }
          alt='Logo Bedland'
        />
      </HeaderBox>
    </nav>
  );
};

export default Header;
