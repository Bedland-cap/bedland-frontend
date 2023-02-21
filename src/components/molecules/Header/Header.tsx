import { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import { HeaderBox, Logo } from 'components/molecules/Header/Header.styled';
import { HeaderI } from 'utils/interfaces/HeaderI';
import Logomanager from 'assets/Logomanager.svg';
import Logoresident from 'assets/Logoresident.svg';
import { ThemeContext } from 'theme/ThemeContext';

const Header = ({ variant, logged = false }: HeaderI) => {
  const { palette } = useContext(ThemeContext);

  return (
    <HeaderBox theme={{ logged }}>
      <Logo
        src={variant === 'resident' ? Logoresident : Logomanager}
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
