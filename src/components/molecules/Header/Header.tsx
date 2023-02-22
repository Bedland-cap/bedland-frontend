import { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import { HeaderBox, Logo } from 'components/molecules/Header/Header.styled';
import { ThemeContext } from 'theme/ThemeContext';
import LogoManager from 'assets/Logomanager.svg';
import LogoResident from 'assets/Logoresident.svg';

type HeaderProps = {
  variant: 'manager' | 'resident';
  logged: boolean;
};

const Header = ({ variant, logged = false }: HeaderProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <HeaderBox theme={{ logged }}>
      <Logo
        src={variant === 'resident' ? LogoResident : LogoManager}
        theme={{ logged }}
      />
      {logged && (
        <Button
          backgroundColor={palette.secondaryDark}
          type='button'
          textColor='#ffffff'
          variant='primary'
        >
          dropdown here
        </Button>
      )}
    </HeaderBox>
  );
};

export default Header;
