import { HeaderBox, Logo } from 'components/molecules/Header/Header.styled';
import { HeaderI } from 'utils/interfaces/HeaderI';
import logoImg from 'assets/Logo.png';

const Header = (props: HeaderI) => {
  const { variant } = props;
  return (
    <nav>
      <HeaderBox theme={{ variant }}>
        <Logo src={logoImg} theme={{ variant }} />
      </HeaderBox>
    </nav>
  );
};

export default Header;
