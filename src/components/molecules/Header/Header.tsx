import { HeaderBox, Logo } from "components/molecules/Header/Header.styled";
import { HeaderI } from "utils/interfaces/HeaderI";

export const Header = (props: HeaderI) => {
  const { variant } = props;
  return (
    <nav>
      <HeaderBox theme={{ variant }}>
        <Logo src={require("assets/Logo.png")} theme={{ variant }} />
      </HeaderBox>
    </nav>
  );
};
